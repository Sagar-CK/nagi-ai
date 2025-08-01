import { ChevronRight, Book, Component, Bot, MessageSquare, FileText, Users, Zap, Brain, type LucideProps } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
      <path d="M12 2v20" />
    </svg>
  ),
  chevronRight: (props: LucideProps) => <ChevronRight {...props} />,
  book: (props: LucideProps) => <Book {...props} />,
  component: (props: LucideProps) => <Component {...props} />,
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  bot: (props: LucideProps) => <Bot {...props} />,
  messageSquare: (props: LucideProps) => <MessageSquare {...props} />,
  fileText: (props: LucideProps) => <FileText {...props} />,
  users: (props: LucideProps) => <Users {...props} />,
  zap: (props: LucideProps) => <Zap {...props} />,
  brain: (props: LucideProps) => <Brain {...props} />,
}; 