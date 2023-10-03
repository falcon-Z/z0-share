import FirstSetupForm from "@falcon-z/app/_components/profile/firstSetupForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@falcon-z/app/_components/ui/card";

export default function FirstSetupPage() {
  return (
    <Card className="shadow-2xl shadow-neutral-200/25">
      <CardHeader>
        <CardTitle>
          <h3>Lets get to know you</h3>
        </CardTitle>
        <CardDescription>
          This is how you will be known to others in this app
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FirstSetupForm />
      </CardContent>
    </Card>
  );
}
