import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"


export function PostCard({ author, avatarUrl, timestamp, content }) {
  const postDate = timestamp?.toDate();

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={author} />
          <AvatarFallback>{author?.[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{author}</span>
          <span className="text-xs text-muted-foreground">{postDate ? formatDistanceToNow(postDate, { addSuffix: true }) : "Just now"}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  )
}
