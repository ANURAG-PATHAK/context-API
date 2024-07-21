import {
    CardHeader,
    CardTitle,
    Card,
    CardContent,
    CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
export default function Details() {
    return (
        <div>
            <Card className="mt-6 w-96">
                <CardHeader>
                    <CardTitle className="text-center">
                        Details
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <img
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                        alt="card-image"
                    />
                    <p className="text-center mb-2 text-blue-600 text-3xl">
                        UI/UX Review Check
                    </p>
                    <p className="text-center">
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </p>
                </CardContent>
                <CardFooter className="pt-0">
                    <Button className="w-full">Read More</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
