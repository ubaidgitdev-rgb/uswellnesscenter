import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        content: "USWellnessCenter has completely transformed how I view food. The meal plans are delicious and easy to follow.",
        author: "Sarah J.",
        role: "Yoga Instructor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        content: "The best nutrition app I've used. The data tracking is incredibly detailed yet simple to understand.",
        author: "Mark T.",
        role: "Marathon Runner",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        content: "I love the community aspect. It keeps me motivated to stick to my goals even on tough days.",
        author: "Emily R.",
        role: "Busy Mom",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

const Testimonials = () => {
    return (
        <div className="bg-emerald-50 py-16 lg:py-24" id="testimonials">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">Testimonials</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Success Stories
                    </p>
                </motion.div>
                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white overflow-hidden shadow-lg rounded-xl transition-all duration-300"
                        >
                            <div className="px-6 py-8">
                                <div className="flex items-center">
                                    <img className="h-12 w-12 rounded-full ring-2 ring-emerald-500" src={testimonial.image} alt={testimonial.author} />
                                    <div className="ml-4">
                                        <div className="text-sm font-bold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                                <p className="mt-6 text-gray-600 italic">
                                    "{testimonial.content}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
