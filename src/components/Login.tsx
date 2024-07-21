import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
    Card, 
    CardContent, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser({
            email,
            password
        });
    };

    return (
        <div className="flex items-center justify-center">
            <Card className="w-96">
                <CardHeader>
                    <CardTitle className="text-center">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <Label>Email</Label>
                    <Input type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value);
                    }} />
                    <Label>Password</Label>
                    <Input type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }} />
                </CardContent>
                <CardFooter className="flex items-center justify-center">
                    <Button variant="default" className="w-full" onClick={handleSubmit}>Login</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Login;