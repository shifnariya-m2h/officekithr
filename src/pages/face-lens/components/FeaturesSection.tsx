import { HeartHandshake, Goal, CircleGauge, ChartLine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
    const features = [
        {
            icon: HeartHandshake,
            title: "Completely Free & Transparent",
            description: "Full access for 25 users with no hidden fees or setup costs."
        },
        {
            icon: Goal,
            title: "Accurate & Proxy-Proof",
            description: "AI ensures only employees mark attendance, preventing fraud."
        },
        {
            icon: CircleGauge,
            title: "Touchless & Instant",
            description: "Face scan attendance, synced instantly across web & mobile."
        },
        {
            icon: ChartLine,
            title: "Seamless Integrated & Scalable",
            description: "Attendance syncs with HR, payroll, and reports across all setups."
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Why AI Face Recognition?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-accent-blue to-primary rounded-2xl flex items-center justify-center">
                                    <feature.icon className="w-10 h-10 text-blue-500" />
                                </div>


                                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;