import React from 'react'
import {Form} from 'react-bootstrap'
import Link from 'next/link'


export default function LoginForm() {
    return (
        <div className="login-form">
            <div className="form-title-box">Login</div>
            <Form.Control type="text" placeholder="Phone number"/>
            <Form.Control type="password" placeholder="Password"/>
            <p>Forgot <Link href="/forgot-password">Username/Password?</Link></p>
            <button className="btn btn-green">Submit</button>
            <h5>Don't have an account?</h5>
            <div className="d-flex justify-content-center">
                <Link href="/signup">SIGNUP</Link>
            </div>
        </div>
    )
}
