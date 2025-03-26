"use client";

import Image from "next/image";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import Footer from "@/components/Footer";
import {Controller, useForm} from "react-hook-form";
import {ContactFormFields} from "@/types/contact-form.types";
import useBreakPoint from "@/hooks/useBreakPoint"; // Import your Footer component
import DirectMessageButton from "@/components/DirectMessageButton";
import Link from "next/link";
import {useToast} from "@/hooks/use-toast";
import {useState} from "react";
import {PulsingDotsLoader} from "@/components/PulsingDotsLoader";

// changes
const ContactUsForm = () => {

    const breakPoints = useBreakPoint();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {toast} = useToast();
    const {register, handleSubmit, control, formState: {errors, touchedFields}} = useForm<ContactFormFields>({
        mode: "onChange",
    })

    // Array of letter images with their properties for cleaner mapping
    const letterImages = [
        {
            src: "/svg/letters/P.svg",
            alt: "p",
            width: 44,
            height: 60,
            style: {left: "247px", top: "201px"},
            delay: 0,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 68,
            height: 96,
            style: {right: "393px", top: "121px"},
            delay: 0.1,
        },
        {
            src: "/svg/letters/P.svg",
            alt: "p",
            width: 44,
            height: 60,
            style: {right: "198px", top: "201px"},
            delay: 0.2,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 54,
            height: 72,
            style: {left: "82px", top: "465px"},
            delay: 0.3,
        },
        {
            src: "/svg/letters/3.svg",
            alt: "3",
            width: 68,
            height: 96,
            style: {left: "372px", top: "619px"},
            delay: 0.4,
        },
        {
            src: "/svg/letters/X.svg",
            alt: "x",
            width: 62,
            height: 84,
            style: {right: "83px", top: "707px"},
            delay: 0.6,
        },
    ];

    const onSubmit = async (data: ContactFormFields) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                toast({
                    description: "Your message has been sent.",
                })
            }

            if (response.status === 400) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: result.message,
                })
            }

        } catch (err) {
            console.log(err);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            })
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="flex flex-col items-center z-10 bg-center bg-cover bg-no-repeat min-h-screen gap-[100px]"
        >
            {/* Animated Letter Images in the Background */}
            {breakPoints === "desktop" &&
                letterImages.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: -100}} // Start 100px above final position
                        whileInView={{opacity: 1, y: 0}} // Move to final position
                        transition={{duration: 0.3, delay: img.delay, ease: "easeOut"}} // Staggered delay
                        style={{position: "absolute", ...img.style}} // Apply absolute positioning
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                        />
                    </motion.div>
                ))}

            <div className="flex flex-col items-center  pt-[73px] justify-center w-full flex-grow">
                <div className="flex flex-col items-center justify-center md:px-[132px] gap-[24px]">
                    {/* Heading */}
                    <motion.div
                        initial={{y: -50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 1, delay: 0.5}}
                        className="flex flex-col items-center justify-center md:pt-[115px]"
                    >
                        <h2
                            className="uppercase font-outfit md:text-[60px] text-[32px] font-bold bg-clip-text text-transparent"
                            style={{
                                background:
                                    "var(--text-gradient, radial-gradient(140.63% 111.11% at 0% 50.19%, var(--Orange-1, #F4520E) 21%, #FFF 75%))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Contact Us
                        </h2>
                        <span className="text-white md:text-[20px] text-[16px] font-outfit font-[400]">
        Any question or remarks? Just write us a message!
    </span>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 1, delay: 1}}
                        className="flex flex-col-reverse w-full md:flex-row h-auto  md:p-[10px] p-[20px] gap-[20px] md:gap-[50px] rounded-[10px] bg-[#000] shadow-[0px_0px_60px_30px_rgba(0,0,0,0.03)]"
                    >
                        {/* Email Details */}
                        <motion.div
                            initial={{x: -50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1.5}}
                            className="relative flex flex-col rounded-[10px] overflow-hidden bg-[#1F1F21] md:min-w-[491px] text-[#FF9A70] font-outfit text-[24px] font-[500] h-[319px] md:h-auto  p-[20px]  md:pl-[40px] md:pt-[40px] gap-[24px] md:gap-[45px]"
                        >
                            <div
                                className="text-[#FF9A70] font-outfit md:text-[24px]  md:text-start  text-center text-[20px] items-center font-[500]">
                                Contact Options
                            </div>
                            <div
                                className="flex items-center justify-center md:justify-start pt-16 md:pt-40 gap-[14px] md:gap-[14px]">
                                <Link href={"https://calendly.com/theapexmediahub"} target="_blank"
                                      rel="noopener noreferrer">
                                    <Button className="text-[12px] md:text-[16px]" variant={"transparent"}>Schedule A
                                        Call</Button>
                                </Link>
                                <DirectMessageButton/>
                                {/*<div className="flex flex-row gap-[8px]">*/}
                                {/*    <Image src="/svg/Vector (2).svg" alt="email" width={20} height={16}/>*/}
                                {/*    <span className="text-white font-outfit font-[500] text-[16px]">*/}
                                {/*        contact@apexstudio.com*/}
                                {/*    </span>*/}
                                {/*</div>*/}

                                {/*<div className="flex flex-row gap-[8px]">*/}
                                {/*    <Image src="/svg/Web3.0_x5F_05 (3).svg" alt="email" width={20} height={16}/>*/}
                                {/*    <span className="text-white font-outfit font-[500] text-[16px]">*/}
                                {/*        apexstudio@telegram.com*/}
                                {/*    </span>*/}
                                {/*</div>*/}

                            </div>
                            {/* Circle */}
                            <div
                                className="absolute right-[-64px] bottom-[-96.5px] md:right-[-44px] md:bottom-[-86px]">
                                <div
                                    className="bg-[#F4520E] rounded-[269px] w-[193px] h-[193px] md:w-[269px] md:h-[269px]"></div>
                            </div>

                            {/*Smaller Circle*/}
                            <div className="absolute right-[42px] bottom-[38px] md:right-[70px] md:bottom-[81px]">
                                <div style={{
                                    background: 'rgba(255, 249, 249, 0.13)'
                                }}
                                     className=" z-[-10px] rounded-[138px] w-[76px] h-[76px] md:w-[138px] md:h-[138px]"></div>
                            </div>
                        </motion.div>

                        {/* Form Content */}
                        <motion.div
                            initial={{x: 50, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1.5}}
                            className="w-full"
                        >
                            <div
                                className="text-white max-w-full md:max-w-[595px]  md:pt-[60px]  md:pr-[50px] flex flex-col gap-[20px] md:gap-[40px]">
                                {/* Name Fields */}
                                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[36px]">
                                    <div className="w-full">
                                        <Label
                                            className="font-outfit text-[14px]  font-[500] transition-colors duration-200 ease-in-out peer-focus:text-[#1A73E8]" // Add transition for smooth color change
                                            htmlFor="firstName">
                                            First Name
                                        </Label>
                                        <Input
                                            {...register('firstName', {required: "First Name required"})}
                                            placeholder={"Enter your first name"}
                                            className="w-full placeholder:text-white placeholder:text-[12px] font-poppins placeholder:text-opacity-20 peer"
                                            id="firstName"
                                            type="text"
                                        />
                                        {(errors["firstName"] || touchedFields["firstName"]) &&
                                            <div className="text-[#F00] text-[11px] font-outfit font-[300] pt-1">
                                                {errors.firstName?.message}
                                            </div>
                                        }
                                    </div>
                                    <div className="w-full">
                                        <Label className="font-outfit text-[14px] font-[500]" htmlFor="lastName">
                                            Last Name
                                        </Label>
                                        <Input
                                            id={"lastName"}  {...register('lastName', {required: "Last Name required"})}
                                            placeholder={"Enter your last name"}
                                            className="w-full placeholder:text-white placeholder:text-[12px] font-poppins placeholder:text-opacity-20"
                                            type="text"/>
                                        {(errors["lastName"] || touchedFields["lastName"]) &&
                                            <div className="text-[#F00] text-[11px] font-outfit font-[300] pt-1">
                                                {errors.lastName?.message}
                                            </div>}
                                    </div>
                                </div>

                                {/* Email and Phone Fields */}
                                <div className="flex flex-col md:flex-row gap-[20px] md:gap-[36px]">
                                    <div className="w-full">
                                        <Label className="font-outfit text-[14px] font-[500]" htmlFor="email">
                                            Email<sup>*</sup>
                                        </Label>
                                        <Input
                                            {...register('email', {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            className="w-full placeholder:text-white placeholder:text-[12px] font-poppins placeholder:text-opacity-20"
                                            id="email" type="email" placeholder="Enter your email"/>

                                        {(errors["email"] || touchedFields["email"]) &&
                                            <div className="text-[#F00] text-[11px] font-outfit font-[300] pt-1">
                                                {errors.email?.message}
                                            </div>}
                                    </div>


                                    <div className="w-full">
                                        <Label className="font-outfit text-[14px] font-[500]" htmlFor="phone">
                                            Phone Number
                                        </Label>
                                        <Input  {...register('phone', {required: "Phone number required"})}
                                                placeholder={"Enter your phone number"}
                                                className="w-full placeholder:text-white placeholder:text-[12px] font-poppins placeholder:text-opacity-20"
                                                id="phone" type="text" required/>
                                        {(errors["phone"] || touchedFields["phone"]) &&
                                            <div className="text-[#F00] text-[11px] font-outfit font-[300] pt-1">
                                                {errors.phone?.message}
                                            </div>}
                                    </div>
                                </div>

                                {/* Subject Selection */}
                                <div>
                                    <div className="flex flex-col gap-[16px]">
                                        <div className="text-white font-outfit text-[20px] font-[600]">
                                            Select Subject?
                                        </div>
                                        <div className="flex flex-wrap gap-[10px]">

                                            <Controller control={control} render={({field: {onChange, value}}) => (
                                                <RadioGroup value={value} onValueChange={onChange}
                                                            defaultValue="option-one"
                                                            className="flex flex-wrap gap-[10px]">
                                                    <div className="flex items-center space-x-[10px]">
                                                        <RadioGroupItem value="Web3 Marketing" id="option-one"/>
                                                        <Label className="text-[14px] font-[400] font-outfit"
                                                               htmlFor="option-one">
                                                            Web3 Marketing
                                                        </Label>
                                                    </div>
                                                    <div className="flex items-center space-x-[10px]">
                                                        <RadioGroupItem value="Influencer & KOL Marketing"
                                                                        id="option-two"/>
                                                        <Label className="text-[14px] font-[400] font-outfit"
                                                               htmlFor="option-two">
                                                            Influencer & KOL Marketing
                                                        </Label>
                                                    </div>
                                                    <div className="flex items-center space-x-[10px]">
                                                        <RadioGroupItem value="Investment & Advisory"
                                                                        id="option-three"/>
                                                        <Label className="text-[14px] font-[400] font-outfit"
                                                               htmlFor="option-three">
                                                            Investment & Advisory
                                                        </Label>
                                                    </div>
                                                    <div className="flex items-center space-x-[10px]">
                                                        <RadioGroupItem value="Fundraising" id="option-four"/>
                                                        <Label className="text-[14px] font-[400] font-outfit"
                                                               htmlFor="option-four">
                                                            Fundraising
                                                        </Label>
                                                    </div>
                                                    <div className="flex items-center space-x-[10px]">
                                                        <RadioGroupItem value="Others" id="option-five"/>
                                                        <Label className="text-[14px] font-[400] font-outfit"
                                                               htmlFor="option-five">
                                                            Others
                                                        </Label>
                                                    </div>
                                                </RadioGroup>

                                            )} name={"subject"}/>


                                        </div>
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="flex flex-col gap-[9px]">
                                    <Label className="font-outfit text-[14px] font-[500] text-[#8D8D8D]"
                                           htmlFor="message">
                                        Message {(errors["message"] || touchedFields["message"]) &&
                                        <span className="text-[#F00] text-[11px] font-outfit font-[300]">
                                            *{errors.message?.message}
                                        </span>}
                                    </Label>
                                    <Textarea
                                        {...register('message', {required: "Message is required"})}
                                        className="w-full md:h-[119px] h-[144px] placeholder:text-[#8D8D8D] rounded-[4px] border border-[#8D8D8D] bg-[#131313] font-outfit"
                                        id="message" placeholder="Type your message here"/>
                                    <div className="relative flex md:justify-end justify-center flex-row">
                                        <Image src="/svg/letter_send 1.svg" alt="send" width={164.672} height={76.62}
                                               className=" absolute top-2 right-28 hidden md:flex"/>
                                        <Button disabled={isSubmitting} onClick={handleSubmit(onSubmit)}
                                                variant={"orange"}>{isSubmitting ?
                                            <PulsingDotsLoader/> : 'Send Message'}</Button>
                                    </div>
                                    <div className="hidden md:block pl-[310px] pb-[20px]">

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Component */}
            <Footer/>
        </motion.div>
    );
};

export default ContactUsForm;