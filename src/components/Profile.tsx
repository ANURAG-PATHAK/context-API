import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import UserContext from "@/context/UserContext";
import { useContext } from "react";
export default function Profile() {
    const { user } = useContext(UserContext)
    return (
        <div className="flex items-center justify-center">
            <Card className="w-96">
                <CardHeader>
                    <CardTitle className="text-center">Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>{user.email}</div>
                    <div>{user.password}</div>
                </CardContent>
            </Card>
        </div>
    );
}
