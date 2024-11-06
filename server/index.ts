import "dotenv/config";
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { APIError } from "better-auth/api";
import { auth } from "./auth";
 
const app = express();
const port = process.env.PORT;
 
app.all("/api/auth/*", toNodeHandler(auth));
app.listen(port, () => {
    console.log(`Better Auth app listening on port ${port}`);
});

const signup = async () => {
    try {
        await auth.api.signUpEmail({
            body: {
                email: "",
                password: ""
            }
        })
    } catch (error) {
        if (error instanceof APIError) {
            console.log(error.message, error.status)
        }
    } 
}

const login = async () => {
    try {
        await auth.api.signInEmail({
            body: {
                email: "",
                password: ""
            }
        })
    } catch (error) {
        if (error instanceof APIError) {
            console.log(error.message, error.status)
        }
    }
}

export { signup, login };
