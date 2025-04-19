import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProfileCardProps {
  name: string
  role: string
  bio: string
  avatarUrl?: string
}

export function ProfileCard({ name, role, bio, avatarUrl }: ProfileCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="flex items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="mt-4 text-center">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Button variant="outline">Message</Button>
        <Button>Follow</Button>
      </CardFooter>
    </Card>
  )
} 