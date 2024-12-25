"use client";
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export const description =
    "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e: { target: { name: string; value: string } }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {

        const mailtoLink = `mailto:sukhraj@zoratechinc.com?subject=New Contact Form Submission&body=${encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;
    };

    return (
        <Card className="mx-auto max-w-lg shadow-2xl min-w-[80vw] md:min-w-[40vw] rounded-2xl">
            <CardHeader>
                <CardTitle className="text-3xl">Get In Touch</CardTitle>
                <CardDescription>
                    You can reach us anytime
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2 grid-cols-2">
                        <div>
                            {/* <Label htmlFor="text">First Name</Label> */}
                            <Input
                                className="h-10  rounded-xl"
                                id="firstname"
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            {/* <Label htmlFor="text">Last Name</Label> */}
                            <Input
                                className="h-10  rounded-xl"
                                id="lastname"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        {/* <Label htmlFor="email">Email</Label> */}
                        <Input
                            className="h-10  rounded-xl"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        {/* <Label htmlFor="text">Phone</Label> */}
                        <Input
                            className="h-10  rounded-xl"
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        {/* <Label htmlFor="textarea">Message</Label> */}
                        <Textarea
                            id="message"
                            name="message"
                            className="  rounded-xl "
                            placeholder="How can we help you?"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <Button onClick={handleSubmit} size={"lg"} type="submit" className="w-full rounded-xl">
                        Submit
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
