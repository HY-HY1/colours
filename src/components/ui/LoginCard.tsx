import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn/card";

import { Button } from "../shadcn/button";
import { Input } from "../shadcn/input";

import { useUser } from "../../hooks/UseUser";

export const LoginCard = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const { login } = useUser()

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3001/account/login', 
                {email: email, password: password},
                {
                    headers : {
                      "Content-Type": "application/json"
                    }
                }
            )
            if(response.status === 401) {
              return '401 Response'
            }

            localStorage.setItem('token', response.data.token)
            login()
            window.location.href = '/user'
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Log into your colours account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-3/4">
            <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" className="mb-4" />
            <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mb-4" />
          </div>
          <Button onClick={handleLogin}>Login</Button>
        </CardContent>
      </Card>
    </>
  );
};
