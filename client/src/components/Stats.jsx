import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <div className="bg-emerald-900 border-y border-emerald-800">
            <div className="container-custom py-12 sm:py-16 lg:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Trusted by health enthusiasts worldwide
                    </h2>
                    <p className="mt-3 text-xl text-emerald-200 sm:mt-4">
                        Join a growing community committed to better nutrition and healthier lives.
                    </p>
                </motion.div>
                <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                    {[
                        { label: 'Users', value: '10k+' },
                        { label: 'Recipes', value: '500+' },
                        { label: 'Success Stories', value: '98%' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col mt-10 sm:mt-0"
                        >
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-emerald-200">
                                {stat.label}
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">
                                {stat.value}
                            </dd>
                        </motion.div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default Stats;
