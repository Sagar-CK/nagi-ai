"use server"

import { supabase } from "@/lib/supabase"

export async function joinWaitlist(email: string) {
  try {
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          email,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      // Handle duplicate email case
      if (error.code === "23505") {
        return { success: false, error: "Email already registered" }
      }
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error joining waitlist:", error)
    return { success: false, error: "Failed to join waitlist" }
  }
}
