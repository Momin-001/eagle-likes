import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      question: "Why Should I Buy Instagram Followers?",
      answer: "Buying Instagram followers helps boost your profile's credibility and visibility. A higher follower count attracts more organic followers, increases engagement, and makes your account more appealing to brands and collaborators.",
    },
    {
      question: "Can Buying Instagram Followers Boost My Organic Engagement?",
      answer: "Yes! When your follower count increases, your posts are more likely to appear on the Explore page and in recommendations, leading to more organic engagement from real users.",
    },
    {
      question: "How Quickly Will I Receive Instagram Followers After Purchase?",
      answer: "Delivery typically begins within minutes of your purchase and is completed gradually to ensure natural-looking growth. Most orders are fully delivered within 24-72 hours.",
    },
    {
      question: "Will My Account Get Banned For Buying Instagram Followers?",
      answer: "No. Eagle Likes uses safe delivery methods that comply with Instagram's guidelines. We deliver real, active followers gradually to keep your account safe and secure.",
    },
    {
      question: "Can Buying Instagram Followers Help Me Get Featured On The Explore Page?",
      answer: "Absolutely. A higher follower count signals to Instagram's algorithm that your content is popular, increasing the chances of being featured on the Explore page.",
    },
    {
      question: "How Do Instagram Followers From Eagle Likes Help With Brand Growth?",
      answer: "More followers mean greater social proof, which attracts partnerships, sponsorships, and collaborations. Brands prefer working with accounts that have a strong and engaged following.",
    },
  ];
  
  const FAQSection = () => {
    return (
      <section className="py-10 px-10 glow-right relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-10 text-sm w-auto mx-auto sm:max-w-md">
            Have questions? We've got answers. Here are some of the most
            common queries about our Instagram Followers
          </p>
  
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-muted-foreground rounded-xl px-5 bg-card/40 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-sm md:text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };
  
  export default FAQSection;
  