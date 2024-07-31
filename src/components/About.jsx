import React from 'react';
import { Building2, Users, Landmark, Utensils } from 'lucide-react';

const FeatureItem = ({ Icon, title, description }) => (
    <div className="flex flex-col items-center p-4">
        <Icon className="w-12 h-12 text-red-600 mb-2" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-center">{description}</p>
    </div>
);

const About = () => {
    const features = [
        {
            Icon: Building2,
            title: "Ancient Civilization",
            description: "One of the world's oldest civilizations with over 5,000 years of history."
        },
        {
            Icon: Users,
            title: "Diverse Population",
            description: "Home to 56 ethnic groups and over 1.4 billion people."
        },
        {
            Icon: Landmark,
            title: "Iconic Landmarks",
            description: "From the Great Wall to the Terracotta Army, China is full of wonders."
        },
        {
            Icon: Utensils,
            title: "Culinary Delights",
            description: "Explore a rich tapestry of flavors in Chinese cuisine."
        }
    ];

    return (
        <div className="py-12 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">About China</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureItem key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
