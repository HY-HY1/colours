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

export const RegisterCard = () => {

  const [ email, setEmail ] = useState('')
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const handleRegister = async () => {
    if(!email || !name || !password ) {
      setError('Complete all fields')
      return
    }
      try {
          const response = await axios.post(
              '/register', 
              {email: email, password: password, name:name},
              {
                  headers : {

                  }
              }
          )

          if(response.status !== 201) {
            setError(response.data.error)
            return 
          }
      } catch (error) {
          console.log(error)
          setError('Internal Server Error')
      }
  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create an account on colours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-3/4">
            <Input type="email" onChange={(e) => setEmail(e.target.value) } value={email} placeholder="Email" className="mb-4" />
            <Input type="password" onChange={(e) =>  setPassword(e.target.value)} value={password} placeholder="Password" className="mb-4" />
            <Input type="text" onChange={(e) =>  setName(e.target.value) } value={name} placeholder="Name" className="mb-4" />
          </div>
          <Button onClick={handleRegister}>Register</Button>
        </CardContent>
        <CardFooter>
          <p className="text-red-600 text-sm">{error}</p>
        </CardFooter>
      </Card>
    </>
  );
};
