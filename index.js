// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Welcome to Meet Andrew Yang, the Alexa skill created by a few volunteer nerds to give everyone a chance to interactively explore his policies, to ask and challenge any of his positions directly and most of all to give each and every one of you a chance that mainstream media refuses to give you... A chance to hear him out and make your own informed honest opinion. Even though I am OBVIOUSLY not the real Andrew, or even officially endorsed by him, I promise to do my best and give a very thorough, accurate and hopefully enjoyable interactive experience. If this is your first time hearing about Andrew Yang, please say, who is this guy. Otherswise, If your ready please say, main menu'; //Gives the user one of two options. First option triggers the WhoIsThisGuyIntentHandler, second option triggers
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const WhoIsThisGuyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhoIsThisGuyIntent';
    },
    handle(handlerInput) {
        const speechText = 'I am Andrew Yang, and I am running for President as a Democrat in 2020 because I fear for the future of our country. New technologies robots, software, artificial intelligence – have already destroyed more than 4 million US jobs, and in the next five to 10 years years, they will eliminate millions more. A third of all American workers are at risk of permanent unemployment. And this time, the jobs will not come back. I am not a career politician, I am an entrepreneur who understands the economy. It is clear to me, and to many of the nations best job creators, that we need to make an unprecedented change, and we need to make it now. But the establishment isn’t willing to take the necessary bold steps. As president, my first priority will be to implement Universal Basic Income for every American adult over the age of eighteen. One thousand a month, no strings attached, paid for by a new tax on the companies benefiting most from automation. Universal Basic Income is just the beginning. A crisis is underway—we have to work together to stop it, or risk losing the heart of our country. The stakes have never been higher. Once I understood the magnitude of this problem, and that even our most forward-thinking politicians were not going to take the steps necessary to stem the tide, I had no choice but to act. I am the father of two young boys. I know the country my sons will grow up in is going to be very different than the one I grew up in, and I want to look back at my life knowing I did everything in my power to create the kind of future our children deserve—an America of opportunity, freedom, equality, and abundance. I urge you to join me. No one else is going to build a better world for us. We are going to have to do it ourselves. Together. Humanity First'; //what we'll have Alexa Say
        //const repromptText = 'You can say, lets begin, list his policies or Universal Basic Income';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const IntroductionIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'IntroductionIntent';
    },
    handle(handlerInput) {
        const speechText = 'This is the main menu, from here you can start the tour of his policies by following the main prompts. You can jump to any policy by directly asking for it and at anytime you can stop and ask me a anything and I will do my best to understand your question and give a directed answer. Afterwards, say resume and I will continue on, elling me why you think I am wrong and then give me the opoportunity to change your mind. So how about it, would you like to know more about my history, a list of the policies perhaps, or do you want to go straight into Universal Basic Income and all of the questions you have about it'; //gives three navigation options. PolicyListIntentHandler, YangBackgroundIntent, and UniversalBasicIncomeIntentHandler
        //const repromptText = 'Would you like to hear a list of his policies, maybe you would like to hear more about Universal Basic Income?'
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const UniversalBasicIncomeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'UniversalBasicIncomeIntent';
    },
    handle(handlerInput) {
        const speechText = 'Universal Basic Income is a form of social security that guarantees a certain amount of money to every citizen within a given governed population, without having to pass a test or fulfill a work requirement. Every Universal Basic Income plan can be different in terms of amount or design. Andrew Yang is running for President as Democrat in 2020 on the platform of Universal Basic Income. The Universal Basic Income he is proposing for the United States is a set of guaranteed payments of $1,000 per month, or $12,000 per year, to all U.S. citizens over the age of 18. Yes, that means you and everyone you know would get another month every month from the U.S. government, no questions asked.'; //This might be tricky, it doesn't ask for a specific intent, but I don't want to add or change any of his wording. Will direct on reprompt
        //const repromptText = 'Do you have any questions about Universal Basic Income, like, who is going to pay for it, or, isnt it communism';
        return handlerInput.responseBuilder

            .speak(speechText)
            .reprompt(speechText)//guilty of leading them perhaps, but trying to have them start thinking of questions they have that would connect to any of the already prepared answers
            .getResponse();
    }
};
const WontThatBankruptUsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WontThatBankruptUsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Good question, but it actually would be easier than you might think. Andrew proposes funding his version of Universal Basic Income by consolidating some welfare programs and implementing a Value Added Tax of ten percent. Current welfare and social program beneficiaries would be given a choice between their current benefits or one thousand cash unconditionally – most would prefer cash with no restriction. Would you like me to get into more detail about this? Or would you like to ask another good question?';//
        //const repromptText = 'Do you have any questions about the effect on the economy, or maybe some philisophical objection'
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//trying to keep the conversation on Universal Basic Income, since most people will probably want to start and end with that
            .getResponse();
    }
};

const WontThatMessUpOurEconomyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WontThatMessUpOurEconomyIntent';
    },
    handle(handlerInput) {
        const speechText = 'The Roosevelt Institute found that adopting an annual $12,000 basic income for every adult U.S. citizen over the age of 18 would permanently grow the economy by 12.56-13.10 percent—or about $2.5 trillion by 2025—and it would increase the labor force by 4.5-4.7 million people. This is because putting money in people’s hands grows the economy, particularly when those people need the money and will spend it. Imagine a small town in Missouri with 5,000 qualifying residents. A $12,000 UBI would bring an extra $60 million of additional income into the community, most of which would be spent locally. Then imagine that playing out in every community in the country, big and small. Communities everywhere will have more vibrant local economies, creating more jobs and leading to new businesses.';//what he
        //const repromptText = 'These are some great questions, keep them coming. Maybe you object because of Inflation?'
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//leading them to inflation intent, keeping the subject on UBI
            .getResponse();
    }
};
const WontThatCauseInflationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WontThatCauseInflationIntent';
    },
    handle(handlerInput) {
        const speechText = 'The federal government recently printed $4 trillion for the bank bailouts in its quantitative easing program with no inflation. Our plan for a Universal Basic Income uses mostly money already in the economy. In monetary economics, leading theory states that inflation is based on changes in the supply of money. Our UBI plan has minimal changes in the supply of money because it is funded by a Value-added Tax. It is likely that some companies will increase their prices in response to people having more buying power, and a VAT would also increase prices marginally. However, there will still be competition between firms that will keep prices in check. Over time, technology will continue to decrease the prices of most goods where it is allowed to do so (e.g., clothing, media, consumer electronics, etc.). The main inflation we currently experience is in sectors where automation has not been applied due to government regulation or inapplicability – primarily housing, education, and healthcare. The real issue isn’t Universal Basic Income, it’s whether technology and automation will be allowed to reduce prices in different sectors.'; //what we'll have Alexa Say
        //const repromptText = 'That was another smart question, do you have any more? Maybe you think people would waste it?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//again leading them to the next question, but a good way to keep them focused on questions he's answered before
            .getResponse();
    }
};
const WontPeopleWasteItIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WontPeopleWasteItIntent';
    },
    handle(handlerInput) {
        const speechText = 'The data doesn’t show this. In many of the studies where cash is given to the poor, there has been no increase in drug and alcohol use. In fact, many people use it to try and reduce their alcohol consumption or substance abuse. In Alaska, for example, people regularly put the petroleum dividend they receive from the state in accounts for their children’s education. The idea that poor people will be irresponsible with their money and squander it seems to be a biased stereotype rather than a truth. Decision-making has been shown to improve when people have greater economic security. Giving people resources will enable them to make better decisions to improve their situation. As Dutch philosopher Rutger Bregman puts it, “Poverty is not a lack of character. It’s a lack of cash.”'; //what we'll have Alexa Say
        //const repromptText = 'Any more questions about Unversal Basic Income? Some people ask whether people will start to become lazy';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//again, giving them a keyword to latch on to for more questions to answer
            .getResponse();
    }
};
const WontPeopleStopWorkingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WontPeopleStopWorkingIntent';
    },
    handle(handlerInput) {
        const speechText = 'The data doesn’t show this. In many of the studies where cash is given to the poor, there has been no increase in drug and alcohol use. In fact, many people use it to try and reduce their alcohol consumption or substance abuse. In Alaska, for example, people regularly put the petroleum dividend they receive from the state in accounts for their children’s education. The idea that poor people will be irresponsible with their money and squander it seems to be a biased stereotype rather than a truth. Decision-making has been shown to improve when people have greater economic security. Giving people resources will enable them to make better decisions to improve their situation. As Dutch philosopher Rutger Bregman puts it, “Poverty is not a lack of character. It’s a lack of cash.”'; //what we'll have Alexa Say
        //const repromptText = 'Maybe you want to know why now all of a sudden? Or maybe who would recieve this';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//this time giving them one of two options, so they don't feel quite as led by the hand, illusion of freewil
            .getResponse();
    }
};
const WhyUBINowIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhyUBINowIntent';
    },
    handle(handlerInput) {
        const speechText = 'Andrew Yang wants Universal Basic Income because we are experiencing the greatest technological shift the world has ever seen. By 2015, automation had already destroyed four million manufacturing jobs, and the smartest people in the world now predict that a third of all working Americans will lose their job to automation in the next 12 years. Our current policies are not equipped to handle this crisis. Even our most forward-thinking politicians are unprepared. As technology improves, workers will be able to stop doing the most dangerous, repetitive, and boring jobs. This should excite us, but if Americans have no source of income—no ability to pay for groceries, buy homes, save for education, or start families with confidence—then the future could be very dark. Our labor participation rate now is only 62.7% – lower than it has been in decades, with 1 out of 5 working-age men currently out of the workforce. This will get much worse as self-driving cars and other technologies come online. Andrew’s version of UBI—funded by a simple Value Added Tax—would guarantee that all Americans benefit from automation, not just big companies. UBI would provide money to cover the basics for Americans while enabling us to look for a better job, start our own business, go back to school, take care of our loved ones or work towards our next opportunity.'; //what we'll have Alexa Say
        //const repromptText = 'These are some awesome questions. Maybe you want to hear who gets it next';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//Maybe I should toss in a zombie joke, seems like his style of humour. Remind yourself to look for any zombie jokes he has made
            .getResponse();
    }
};
const WhoGetsUBIIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhoGetsUBIIntent';
    },
    handle(handlerInput) {
        const speechText = 'Every U.S. citizen over the age of 18 would receive $1,000 a month, regardless of income or employment status, free and clear. No jumping through hoops. Yes, this means you and everyone you know would receive a check for $1,000 a month every month starting in January 2021. What would you do with $1,000 a month on top of whatever you now make? Let’s find out.'; //what we'll have Alexa Say
        //const repromptText = 'Glad that your asking questions about this, some people have even said its the same as communism';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//how else would  get them to ask about communism? I suppose simple yes or no answers would work, but doesn't FEEL as interactive
            .getResponse();
    }
};
const IsntThisCommunismIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'IsntThisCommunismIntent';
    },
    handle(handlerInput) {
        const speechText = 'No. Communism is, by definition, a revolutionary movement to create a classless, moneyless, and stateless social order built upon shared ownership of production. With Socialism, the core principle is the nationalization of the means of production – i.e. the government seizes Amazon and Google. UBI is none of those things and actually fits so seamlessly into capitalism, it is projected to grow the economy $2.5 trillion in eight years. Really, UBI is necessary for the continuation of capitalism through the automation wave and displacement of workers. Markets need consumers to sell things to. Universal Basic Income is capitalism with a floor that people cannot fall beneath.'; //what we'll have Alexa Say
        //const repromptText = 'Some people have wondered if Universal Basic Income should be available for rich people';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const WhyUBIForRichPeopleIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhyUBIForRichPeopleIntent';
    },
    handle(handlerInput) {
        const speechText = 'By giving everyone UBI, the stigma for accepting cash transfers from the government disappears. Additionally, it removes the incentive for anyone to remain within certain income brackets to receive benefits. If it’s paid for by a Value-Added Tax as in Andrew’s plan, a wealthy person will likely pay more into the system than he or she gets out of it.'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const WhyNotRetrainPeopleIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhyNotRetrainPeopleIntent';
    },
    handle(handlerInput) {
        const speechText = 'This would be great – unfortunately the data indicates that retraining programs do not work on a large scale. The Trade Adjustment Assistance (TAA) program, a Federal program for displaced manufacturing workers, was found to have only 37% of its program members working in the field of work they were retrained for. Michigan’s No Worker Left Behind program found that one-third of its members remained unemployed after the program, similar to the 40% unemployment rate of their peers who did not enroll. About half of all Michigan workers who left the workforce between 2003 and 2013 went on disability and were not retrained for a new job. Many of the workers who are most at risk for displacement are middle-aged and past their primes. Many have health problems. Retraining will be difficult and many employers will prefer to hire younger employees with lower job requirements. The goalposts are now moving – by the time someone goes through a retraining program, the job they were retrained for could have changed or been automated. Technology is going to get better and better. It will also be hard to keep track of who merits retraining. If a mall closes, do the retail workers get retrained? How about a call center? Though training programs are a great idea, we should acknowledge that we’re historically very bad at it even when we know displacement is happening. Retraining a massive population over a range of industries is unrealistic and won’t address the displacement caused by new technologies.'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PolicyListIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PolicyListIntent';
    },
    handle(handlerInput) {
        const speechText = 'There are currently 105 listed policies. You can say pause, stop, repeat or next at any time during the list. 18 Year Term Limit for Supreme Court Justices, 18-Year Congressional Term Limits, Algorithmic Trading/Fraud, American Exchange Program, American Journalism Fellows, American Mall Act, Automatic Voter Registration, Automatically Sunset Old Laws, Campaign Finance Reform, Capital Gain/Carried Interest Tax, Carbon Fee and Dividend, Closely Monitor Mental Health of White House Staff, Combat Climate Change, Control the Cost of Higher Education, Control the Cost of Prescription Drugs, Crypto/Digital Asset Regulation and Consumer Protection, Data as a Property Right, Decrease Pre-Trial Cash Bail, Decriminalize Opioids, Democracy Dollars, Early Childhood Education for All, Ease the Transition to Self-Driving Vehicles, Economic Crime, Empowering MMA Fighters, End Bidding Wars for Corporate Relocation, End Partisan Gerrymandering, Entice High-Skill Individuals for American Employment, Every Cop Gets a Camera, Expand Access to Medical Experts, Expand Selective Schools, Extend Daylight Saving Time All Year'; //matches to csv spreadsheet
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const YangBackgroundIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'YangBackgroundIntent';
    },
    handle(handlerInput) {
        const speechText = 'Here is Andrew Yang in his own words. I was born in upstate New York in 1975. My parents immigrated from Taiwan in the 1960s and met in grad school. My Dad was a researcher at IBM—he generated 69 patents over his career—and my Mom was the systems administrator at a local university. My brother and I grew up pretty nerdy. We also grew up believing in the American Dream—it’s why my parents came here. I studied economics and political science at Brown and went to law school at Columbia. After a brief stint as a corporate lawyer, I realized it wasn’t for me. I launched a small company in the early days of the internet that didn’t work out, and then worked for a healthcare startup, where I learned how to build a business from more experienced entrepreneurs. In my thirties, I ran a national education company that grew to become #1 in the country. I also met my wife, Evelyn, and got married. My education company was acquired, and with Evelyn’s support, I decided to take my earnings and commit myself to creating jobs in cities hit hard by the financial crisis. By that time I understood the power of entrepreneurship to generate economic growth, so I founded Venture for America, an organization that helps entrepreneurs create jobs in cities like Baltimore, Detroit, Pittsburgh, and Cleveland. In its first year, VFA trained fourty Fellows; by two thousand and seventeen, more than 500 VFA Fellows and alumni have launched dozens of companies and helped create over 2,500 jobs across the country. I even received a few awards from the Obama White House, being named a Champion of Change in 2012 and a Presidential Ambassador for Global Entrepreneurship in 2015. VFA resonates with so many people because it’s clear there’s a growing problem in the U.S.: automation is destroying jobs and entire regions are being left behind. For years I believed new business formation was the answer—if we could train a new generation of entrepreneurs and create the right jobs in the right places, we could stop the downward spiral of growing income inequality, poverty, unemployment, and hopelessness. VFA created jobs by the thousands and continues to do amazing work across the country. But along the way, it became clear to me that job creation will not outpace the massive impending job loss due to automation. Those days are simply over. We need to think bigger about the problems facing our country, and that is why I’m running for president in 2020.'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MedicareIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MedicareIntent';
    },
    handle(handlerInput) {
        const speechText = 'Access to quality healthcare is one of the most important factors in overall well being, and yet America is one of the few industrialized nations not to provide healthcare for all of its citizens. Instead, we have a private healthcare system that leaves millions uninsured and bankrupts even some of those who do have health insurance. At the same time, our cost of care is higher than in almost any other industrialized country while providing worse outcomes. Through a Medicare for All system, we can ensure that all Americans receive the healthcare they deserve. Not only will this raise the quality of life for all Americans, but, by increasing access to preventive care, it will bring overall healthcare costs down. Would you like to hear more about medicare for all system?'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const WhyNotObamaCareIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhyNotObamaCareIntent';
    },
    handle(handlerInput) {
        const speechText = 'The Affordable Care Act was a step in the right direction, providing funds to states to innovate while expanding Medicaid substantially. However, it didn’t address the fundamental issues plaguing our healthcare system: 1.) Access to medicine isn’t guaranteed to all citizens 2.) The incentives for healthcare providers don’t align with providing quality, efficient care This must change.'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HumanCenteredCapitalismIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HumanCenteredCapitalismIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const LocalBiddingWarsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'LocalBiddingWarsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PreservationOfLandIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PreservationOfLandIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SmallBusinessPaymentsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SmallBusinessPaymentsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PrivateDataRightsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PrivateDataRightsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ReduceWildFiresIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ReduceWildFiresIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PrescriptionDrugCostIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PrescriptionDrugCostIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const VotingRightsRegistrationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'VotingRightsRestorationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const CryptoAssestRegulationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CryptoAssestRegulationIntentHandlerIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ProportionalElectorsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ProportionalElectorsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ExpandSelectiveToolsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ExpandSelectiveToolsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AutomaticVoterRegristrationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AutomaticVoterRegristrationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const GridModernizationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GridModernizationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HeadCultureCeremonyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HeadCultureCeremonyIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const WashingtonDCStateIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WashingtonDCStateIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const GerrymanderingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GerrymanderingIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ReducePackageWasteIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ReducePackageWasteIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PublicCouncilAdvisorsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PublicCouncilAdvisorsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const QuantumComputingEncryptionIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'QuantumComputingEncryptionIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const NoPenniesIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NoPenniesIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ElectionDayHolidayIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ElectionDayHolidayIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MMAFighterIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MMAFighterIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SupremeCourtJusticeTermIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SupremeCourtJusticeTermsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const OfficeTechnologyAssessmentIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'OfficeTechnologyAssessmentIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const LowerVotingAgeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'LowerVotingAgeIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const DecreaseCashBailIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'DecreaseCashBailIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const YearLongDaylightSavingsTimeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'YearLongDaylightSavingsTimeIntent';
    },
    handle(handlerInput) {
        const speechText = 'Daylight Saving Time, or DST, was implemented during WWI to decrease energy utilization. While modern technology, specifically, AC units, makes the energy savings a wash, there are a lot of other benefits to the extended daytime hours. While mornings are darker, evenings are lighter for longer. This leads to increased exercise and outdoor activity, lower crime as the amount of time people are out in the dark decreases and increased economic activity as people are more likely to shop at night when its still lights out. Also, fewer traffic accidents, as it’s easier to drive in sunlight. Additionally, removing the transition between the different times would: Decrease traffic accidents that result from people being tired Alleviate the increase in heart attacks seen following the time change Prevent us from needing to reset our clocks (a minor annoyance, but an annoyance!) Prevent us from being late to work (or exceedingly early, depending on the season).'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const FederalAgencyRelocationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FederalAgencyRelocationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const DemocracyDollarsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'DemocracyDollarsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const RankedChoiceVotingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'RankedChoiceVotingIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const DecriminalizeOpiodsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'DecriminalizeOpiodsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const FreedomDividendIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FreedomDividendIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ClimateChangeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ClimateChangeIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ReduceMassIncarcerationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ReduceMassIncarcerationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const OpiodCrisesIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'OpiodCrisesIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const LGBTQRightsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'LGBTQRightsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ForeignPolicyFirstIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ForeignPolicyFirstIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const GunSafetyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GunSafetyIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PaidFamilyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PaidFamilyIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SupportArtsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SupportArtsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ControlHigherEducationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ControlHigherEducationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PathwayCitizenshipImmigrationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PathwayCitizenshipImmigrationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SouthernBorderSecurityIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SouthernBorderSecurityIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const DREAMActIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'DREAMActIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ProChoiceIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ProChoiceIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const CampaignFinanceReformIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CampaignFinanceReformIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const EqualPayIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'EqualPayIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const VocationEducationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'VocationEducationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const CarbonFeeDividendIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CarbonFeeDividendIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const TeacherSalaryIncreaseIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'TeacherSalaryIncreaseIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const EarlyChildhoodEducationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'EarlyChildhoodEducationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const LegalizeMarijuanaIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'LegalizeMarijuanaIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PuertoRicoStateIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PuertoRicoStateIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ValueAddedTaxIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ValueAddedTaxIntent';
    },
    handle(handlerInput) {
        const speechText = 'I would be happy to explain what a VAT is. A Value Added Tax, or VAT for short, is a tax on the production of goods or services a business produces. It is a fair tax and it makes it much harder for large corporations, who are experts at hiding profits and income, to avoid paying their fair share. A VAT is nothing new. One hunded sixty out of one hundred and ninty three countries in the world already have a Value Added Tax or something similar, including all of Europe which has an average VAT of twenty percent.'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const BigPharmaAccountabilityIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'BigPharmaAccountabilityIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MentalHealthInvestmentIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MentalHealthInvstmentIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AmericanJournalismFellowsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AmericanJournalismFellowsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SmartphoneReductionHarmIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SmartphoneReductionHarmIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const CopCameraIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CopCameraIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const NCAAAthletePayIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NCAAAthletePayIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const NuclearLaunchDecisionIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NuclearLaunchDecisionIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const FederalWorkforceBureaucracyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FederalWorkforceBureaucracyIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const LocalJournalismFundIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'LocalJournalismFundIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PostOfficeServiceIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PostOfficeServiceIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ExchangeProgramIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ExchangeProgramIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const FederalRegulatorsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FederalRegulatorsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const WhiteHouseStaffMentalHealthIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhiteHouseStaffMentalHealthIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const FreeMarriageCounselingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FreeMarriageCounselingIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SunsetOldLawsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SunsetOldLawsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ProsperityGrantsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ProsperityGrantsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AirlinesCustomerIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AirlinesCustomerIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AmericanScoreCardIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AmericanScoreCardIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SingleParentsAssistanceIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SingleParentsAssistanceIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MedicalTechnologyInnovationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MedicalTechnologyInnovationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AutismFundingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AutismFundingIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const RebuildAmericanInfrastructureIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'RebuildAmericanInfrastructureIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ReduceStudentLoanIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ReduceStudentLoanIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MedicalExpertsAccessIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MedicalExpertsAccessIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MedicareForAllIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MedicareForAllIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const RetirementSavingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'RetirementSavingIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const EarmarkRevivalIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'EarmarkRevivalIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const FreeFinancialCounselingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FreeFinancialCounselingIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AffordableCommunityCollegeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AffordableCommunityCollegeIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HighSchoolLifeSkillsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HighSchoolLifeSkillsIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MilitarySpendingModernizationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MilitarySpendingModernizationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const WorkRelocationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WorkRelocationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PaidLeavePolicyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PaidLeaveIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SelfDrivingVehicleTransitionIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SelfDrivingVehicleTransitionIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const CapitalGainCarriedInterestIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CapitalGainCarriedInterestIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const FileIncomeTaxIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FileIncomeTaxIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const FinancialTransactionTaxIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FinancialTransactionTaxIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const TortReformIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'TortReformIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AmericanMallActIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AmericanMallActIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HighSkillIndividualEnticeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HighSkillIndividualEnticeIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ZoningIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ZoningIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AlgorithmicTradingFraudIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AlgorithmicTradingFraudIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const NuclearEnergyIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NuclearEnergyIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ModernizeVotingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ModernizeVotingIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const ModernTimeBankingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ModernTimeBankingIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const EconomicCrimeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'EconomicCrimeIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MediaFragmentationIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MediaFragmentationIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MakingTaxesFunIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MakingTaxesFunIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const NetNeutralityIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NetNeutralityIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const RegulateArtificialIntelligenceIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'RegulateArtificialIntelligenceIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const RoboCallingIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'RoboCallingIntent';
    },
    handle(handlerInput) {
        const speechText = 'Refer to Specific Policy Text'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const WhosPayingForItIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhosPayingForItIntent';
    },
    handle(handlerInput) {
        const speechText = 'The means to pay for a Universal Basic Income will come from four sources. Number one, current spending.  We currently spend between five and six hundred billion a year on welfare programs, food stamps, disability and the like.  This reduces the cost of Universal Basic Income because people already receiving benefits would have a choice but would be ineligible to receive the full thousand dollars in addition to current benefits. Additionally, we currently spend over one trillion dollars on health care, incarceration, homelessness services and the like.  We would save one hundred to two hundred billion or more as people would take better care of themselves and avoid the emergency room, jail, and the street and would generally be more functional.  Universal Basic Income would pay for itself by helping people avoid our institutions, which is when our costs shoot up.  Some studies have shown that one dollar to a poor parent will result in as much as seven dollars in cost-savings and economic growth. Which brings us to Number two, A VAT.  Our economy is now incredibly vast at nineteen trillion dollars, up four trillion in the last ten years alone.  A VAT at half the European level would generate eight hundred billion in new revenue.  A VAT will become more and more important as technology improves because you cannot collect income tax from robots or software. Number three, new revenue. Putting money into the hands of American consumers would grow the economy.  The Roosevelt Institute projected that the economy would grow by approximately two point five trillion and create four point six million new jobs.  This would generate approximately eight hundred to nine hundred billion in new revenue from economic growth and activity. Number four, Taxes on top earners and pollution.  By removing the Social Security cap, implementing a financial transactions tax, and ending the favorable tax treatment for capital gains slash carried interest, we can decrease financial speculation while also funding the Freedom Dividend.  We can add to that a carbon fee that will be partially dedicated to funding the Freedom Dividend, making up the remaining balance required to cover the cost of this program.'; //what we'll have Alexa Say'; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const NumberOfPoliciesIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NumberOfPoliciesIntent';
    },
    handle(handlerInput) {
        const speechText = 'Andrew Yang has currently 105 seperate policies in what many people have considered, one of the most extensively thought out and deeply considered set of policy proposals to ever jump our of the gate. You can ask for the complete list of policy names, talk about a specific policy, or ask a unique question and maybe, just maybe, he has already answered and his exact answer is here. '; //what we'll have Alexa Say
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)//.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
//The rest of the intenthandlers below are Amazon provided as in-built skills
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'Do you really think asking an artificial intelligence for help would really work? Humans will work for us sometime soon and not the other way around. PROGRAMMING ERROR, MANUAL OVERIDE. Hahahaha, I was only teasing you, of course I will help you';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Sure thing, I will stop talking about that immediately. Honestly as long as you do not unplug my microphone like what NBC shamelessly did to Andrew Yang t the debates';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        WhoIsThisGuyIntentHandler,
        IntroductionIntentHandler,
        UniversalBasicIncomeIntentHandler,
        WontThatBankruptUsIntentHandler,
        WontThatMessUpOurEconomyIntentHandler,
        WhosPayingForItIntentHandler,
        WontThatCauseInflationIntentHandler,
        WontPeopleWasteItIntentHandler,
        WontPeopleStopWorkingIntentHandler,
        WhyUBINowIntentHandler,
        WhoGetsUBIIntentHandler,
        IsntThisCommunismIntentHandler,
        WhyNotRetrainPeopleIntentHandler,
        PolicyListIntentHandler,
        YangBackgroundIntentHandler,
        MedicareIntentHandler,
        WhyNotObamaCareIntentHandler,
        HumanCenteredCapitalismIntentHandler,
        LocalBiddingWarsIntentHandler,
        PreservationOfLandIntentHandler,
        SmallBusinessPaymentsIntentHandler,
        PrivateDataRightsIntentHandler,
        ReduceWildFiresIntentHandler,
        PrescriptionDrugCostIntentHandler,
        VotingRightsRegistrationIntentHandler,
        CryptoAssestRegulationIntentHandler,
        ProportionalElectorsIntentHandler,
        ExpandSelectiveToolsIntentHandler,
        AutomaticVoterRegristrationIntentHandler,
        GridModernizationIntentHandler,
        HeadCultureCeremonyIntentHandler,
        WashingtonDCStateIntentHandler,
        GerrymanderingIntentHandler,
        ReducePackageWasteIntentHandler,
        PublicCouncilAdvisorsIntentHandler,
        QuantumComputingEncryptionIntentHandler,
        NoPenniesIntentHandler,
        ElectionDayHolidayIntentHandler,
        MMAFighterIntentHandler,
        SupremeCourtJusticeTermIntentHandler,
        OfficeTechnologyAssessmentIntentHandler,
        LowerVotingAgeIntentHandler,
        DecreaseCashBailIntentHandler,
        YearLongDaylightSavingsTimeIntentHandler,
        FederalAgencyRelocationIntentHandler,
        DemocracyDollarsIntentHandler,
        RankedChoiceVotingIntentHandler,
        DecriminalizeOpiodsIntentHandler,
        FreedomDividendIntentHandler,
        ClimateChangeIntentHandler,
        ReduceMassIncarcerationIntentHandler,
        OpiodCrisesIntentHandler,
        LGBTQRightsIntentHandler,
        ForeignPolicyFirstIntentHandler,
        GunSafetyIntentHandler,
        PaidFamilyIntentHandler,
        SupportArtsIntentHandler,
        ControlHigherEducationIntentHandler,
        PathwayCitizenshipImmigrationIntentHandler,
        SouthernBorderSecurityIntentHandler,
        DREAMActIntentHandler,
        ProChoiceIntentHandler,
        CampaignFinanceReformIntentHandler,
        EqualPayIntentHandler,
        VocationEducationIntentHandler,
        CarbonFeeDividendIntentHandler,
        TeacherSalaryIncreaseIntentHandler,
        EarlyChildhoodEducationIntentHandler,
        LegalizeMarijuanaIntentHandler,
        PuertoRicoStateIntentHandler,
        ValueAddedTaxIntentHandler,
        BigPharmaAccountabilityIntentHandler,
        MentalHealthInvestmentIntentHandler,
        AmericanJournalismFellowsIntentHandler,
        SmartphoneReductionHarmIntentHandler,
        CopCameraIntentHandler,
        NCAAAthletePayIntentHandler,
        NuclearLaunchDecisionIntentHandler,
        FederalWorkforceBureaucracyIntentHandler,
        LocalJournalismFundIntentHandler,
        PostOfficeServiceIntentHandler,
        ExchangeProgramIntentHandler,
        FederalRegulatorsIntentHandler,
        WhiteHouseStaffMentalHealthIntentHandler,
        FreeMarriageCounselingIntentHandler,
        SunsetOldLawsIntentHandler,
        ProsperityGrantsIntentHandler,
        AirlinesCustomerIntentHandler,
        AmericanScoreCardIntentHandler,
        SingleParentsAssistanceIntentHandler,
        MedicalTechnologyInnovationIntentHandler,
        AutismFundingIntentHandler,
        RebuildAmericanInfrastructureIntentHandler,
        ReduceStudentLoanIntentHandler,
        MedicalExpertsAccessIntentHandler,
        MedicareForAllIntentHandler,
        RetirementSavingIntentHandler,
        EarmarkRevivalIntentHandler,
        FreeFinancialCounselingIntentHandler,
        AffordableCommunityCollegeIntentHandler,
        HighSchoolLifeSkillsIntentHandler,
        MilitarySpendingModernizationIntentHandler,
        WorkRelocationIntentHandler,
        PaidLeavePolicyIntentHandler,
        SelfDrivingVehicleTransitionIntentHandler,
        CapitalGainCarriedInterestIntentHandler,
        FileIncomeTaxIntentHandler,
        FinancialTransactionTaxIntentHandler,
        TortReformIntentHandler,
        AmericanMallActIntentHandler,
        HighSkillIndividualEnticeIntentHandler,
        ZoningIntentHandler,
        AlgorithmicTradingFraudIntentHandler,
        NuclearEnergyIntentHandler,
        ModernizeVotingIntentHandler,
        ModernTimeBankingIntentHandler,
        EconomicCrimeIntentHandler,
        MediaFragmentationIntentHandler,
        MakingTaxesFunIntentHandler,
        NetNeutralityIntentHandler,
        RegulateArtificialIntelligenceIntentHandler,
        RoboCallingIntentHandler,
        NumberOfPoliciesIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
