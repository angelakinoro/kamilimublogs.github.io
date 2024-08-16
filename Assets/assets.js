import community from './community.jpg';
import ict from './ict.jpg';
import innovation from './innovation.jpg';
import personal from './personal.jpg';
import scholarship from './scholarship.jpg';
import problemideation from './problemideation.jpg';
import publicspeaking from './publicspeaking.jpg';
import problemsolving from './problemsolving.jpg';




import facebook_icon from './facebook_icon.png'
import googleplus_icon from './googleplus_icon.png'
import twitter_icon from './twitter_icon.png'
import logo from './logo.png'
import arrow from './arrow.png'
import logo_light from './logo_light.png'
import blog_icon from './blog_icon.png'
import add_icon from './add_icon.png'
import email_icon from './email_icon.png'
import upload_area from './upload_area.png'




export const assets = {
    community,
    ict,
    innovation,
    personal,
    scholarship,
    facebook_icon,
    googleplus_icon,
    twitter_icon,
    logo,
    arrow,
    logo_light,
    blog_icon,
    add_icon,
    email_icon,
    upload_area,
    publicspeaking,
    problemideation,
    problemideation
}

export const blog_data = [{
    id: 1,
    title: "A detailed blog on Community Engagement",
    description: "Here's what I learnt about Community Engagement this month",
    image: community,
    date: Date.now(),
    category: "month 3",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "Soul In The Game - Aleya Kassam | Redifining yourself admist the noise " },
        { type: "paragraph", text: " Find people whose whys align with yours" },
        { type: "paragraph", text: "If you're struggling, don't internalize it as self blame. There's probably a reason and it might not be your fault" },
        { type: "paragraph", text: "Allow people room to sell you on something you don't agree with because there might be a truth (Lipsync for your darling)" },
        { type: "paragraph", text: "The process does not owe you anything. Trust yourself" },
        { type: "paragraph", text: "You have to leave the bathroom to enter the kitchen (leave a space to experience another)" },
        { type: "paragraph", text: "Honor the step that you're in (life has seasons so take joy in the journey)" },
        { type: "paragraph", text: "You can share your work with people even in its rough forms and that will help shape it" }
    ]
},
{
    id: 2,
    title: "ICT explained",
    description: "Here's what I learnt about ICT this month",
    image: ict,
    date: Date.now(),
    category: "month 3",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "-> Introduction to Git and creating a portfolio on GitHub" },
        { type: "paragraph", text: "git branch <name_of_branh> -> creates a new branch" },
        { type: "paragraph", text: "git checkout -b <name_of_branch> -> Creating and switching to the new branch" },
        { type: "paragraph", text: "git merge master -> merging branches " },
        { type: "paragraph", text: "git branch -D <name_of_branch> -> Deleting a branch" },
        { type: "paragraph", text: "We also learnt how to link local projects to GitHub" },


        { type: "heading", text: "-> Using GitHub to Collaborate on Open Source" },

        { type: "paragraph", text: "Workflow of collaborative Git: fork, clone,branch, push, pull request" },
        { type: "heading", text: "Tips for beginner contributors" },
        { type: "paragraph", text: "Always read the documentation" },
        { type: "paragraph", text: "Be open to feedback" },
        { type: "paragraph", text: "Relate well with fellow contributors" },
        { type: "paragraph", text: "Quality and quantity" },

        { type: "heading", text: "-> Problem Solving using Data Structures 1" },
        { type: "heading", text: "Why learn DSA" },
        { type: "paragraph", text: "Is a core CS concept" },
        { type: "paragraph", text: "Common interview questions for software engineering roles" },
        { type: "paragraph", text: "Writing optimized code" },
        { type: "paragraph", text: "Implement problem-solving" },

        { type: "heading", text: "OOP principles:" },
        { type: "paragraph", text: " Encapsulation" },
        { type: "paragraph", text: "Inheritance" },
        { type: "paragraph", text: "Polymorphism" },
        { type: "paragraph", text: "Abstraction" },

        { type: "heading", text: "Stacks: can be implemented using standard libraries or from scratch" },
        { type: "paragraph", text: "Declare and create stack size and storage method ie array" },
        { type: "paragraph", text: "Create methods to check when the stack is empty or full" },
        { type: "paragraph", text: "Create methods to add items to the stack, first check if full" },
        { type: "paragraph", text: "Create methods to remove items to the stack, first check if empty" },
        { type: "paragraph", text: "Create other methods ie size, check top item, print stack etc" },
        { type: "paragraph", text: "Create method to execute these methods" },

        { type: "heading", text: "Queues: can be implemented using standard libraries or from scratch" },
        { type: "paragraph", text: "Create an array to store elements of the queue" },
        { type: "paragraph", text: "Create variables for front,back and number of elements" },
        { type: "paragraph", text: "Create methods to check if the queue is full or empty" },
        { type: "paragraph", text: " Create methods to add elements to the queue" },
        { type: "paragraph", text: " Create methods to remove elements to the queue if not empty" },
        { type: "paragraph", text: "Create other methods ie size, check front item, print queue elements etc" },
        { type: "paragraph", text: "Create class/method to execute these methods" },
    ]
},
{
    id: 3,
    title: "Learning how to Innovate with KamiLimu",
    description: "Here's what I learnt about innovation this month",
    image: innovation,
    date: Date.now(),
    category: "month 3",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "Why KamiLimu is an innovation(Elements of an innovation)" },
        { type: "paragraph", text: "It adresses a need" },
        { type: "paragraph", text: "Creates value" },
        { type: "paragraph", text: "Feasible" },
        { type: "paragraph", text: "User-Friendly" },
        { type: "paragraph", text: "Sustainable" },
        { type: "paragraph", text: "Scalable" },
        { type: "heading", text: "Introduction to Human-Centered Problem Solving" },
        { type: "paragraph", text: "A problem is worth solving when it is relevant, solvable and marketable" },
        { type: "Heading", text: "Ways to find problems" },
        { type: "paragraph", text: "Trends,observation, potential end users, deficient solutions, create artificial problems, choose a problem worth failing at" },
        { type: "heading", text: "Refining the problem" },
        { type: "paragraph", text: "Define the problem using the 5 whys" },
        { type: "paragraph", text: "Craft a problem statement" },
        { type: "paragraph", text: "Refine problem statement" },
        { type: "paragraph", text: "Propose a solution" }

    ]

},
{
    id: 4,
    title: "Tips for Personal and Professional Development",
    description: "Here's what I learnt this month about Personal Development",
    image: personal,
    date: Date.now(),
    category: "month 3",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "- RESPONSIBLE RELATIONSHIP BUILDING" },
        { type: "paragraph", text: "Self-awareness is the understanding of character, feelings, motive,desires" },
        { type: "paragraph", text: "Humility:recognizing one's strengths and weaknesses and the willingness to learn" },
        { type: "paragraph", text: "In a community I should: Grow, Rise, Progress, and receive support " },
        { type: "paragraph", text: "Modesty: downplaying one's abilities (not to be confused with humility) " },
        { type: "paragraph", text: "Pride is the unwillingness to learn" },

        { type: "heading", text: "- RELATIONSHIP BUILDING IN LEADERSHIP" },
        { type: "paragraph", text: " If you can alter your perspective, you can change your experience " },
        { type: "paragraph", text: " Uncomfortable conversations result in comfortable relationships " },
        { type: "paragraph", text: "Platinum rule: Do unto others what they want done to them {contrary to the well known golde" },
        { type: "paragraph", text: "How to achieve success in the workplace: Integrity, Reliability, Right Attitude" },

        { type: "heading", text: "- HOW TO LEARN AND TEACH USING PLAY" },
        { type: "heading", text: "What is play" },
        { type: "paragraph", text: "Creative activity" },
        { type: "paragraph", text: "Engages emotion" },
        { type: "paragraph", text: "May include skills different from the goal" },
        { type: "heading", text: "What does research say about play" },
        { type: "paragraph", text: "- Constructionism theory -> Learning occurs when we build something external to ourselves" },
        { type: "paragraph", text: "Serious play -> Legos used in teaching software engineering " },
        { type: "paragraph", text: "Hole in the wall experiment -> Allowed playful and curious exploration of the computer" },

        { type: "heading", text: "Why is play important" },
        { type: "paragraph", text: "Encourages keenness" },
        { type: "paragraph", text: "Personalizes learning" },
        { type: "paragraph", text: "Encourages reflection and recall" },

        { type: "heading", text: "PS: Play can be used in learning tech" },


        { type: "heading", text: "- PUBLIC SPEAKING 2" },
        { type: "heading", text: "How to research" },
        { type: "paragraph", text: "Start with what you know" },
        { type: "paragraph", text: "Identify gaps in your information " },
        { type: "paragraph", text: "Identify sources to research the gaps -> The sources should be authorities on the subject, reputable and professionals in the subject for credibility . NB: Remember to credit them" },
        { type: "heading", text: "Organizing your speech" },
        { type: "paragraph", text: "Introduction: Capture the audience, be passionate, start powerfully" },
        { type: "paragraph", text: "Body: should be three points" },
        { type: "paragraph", text: "Conclusion: summarize your points, signal the end, give a CTA, end with a clincher" },

        { type: "heading", text: "Remember: SPEECH IS POWER, SPEECH IS TO PERSUADE, SPEECH IS TO CONVERT AND COMPEL" },


        { type: "heading", text: "- STORYTELLING USING PRESENTATION(Professional Development)" },
        { type: "heading", text: "Why we need presentation and storytelling skills:" },
        { type: "paragraph", text: "Improve general confidence in public speaking" },
        { type: "paragraph", text: " Have Impact" },
        { type: "paragraph", text: "Successful innovation pitches" },
        { type: "paragraph", text: "Communicate effectively to a mixed audience" },
        { type: "heading", text: "Designing an effective presentation: " },
        { type: "paragraph", text: " One idea per slide" },
        { type: "paragraph", text: "No full sentences" },
        { type: "paragraph", text: "No more than 3 - 5 points per slide" },
        { type: "paragraph", text: "Credit sources (use full names when crediting people, use URL shorteners)" },
        { type: "paragraph", text: "Your vocal words are the pitch" }

    ]

},
{
    id: 5,
    title: "Enhancing your skills in Scholarship Writing",
    description: "Here's what I learn't in Scholarship Writing this month",
    image: scholarship,
    date: Date.now(),
    category: "month 3",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "No session this month on Scholarship Writing but I remind us to  #rejectfinancebill2024 " },
    ]

},
{
    id: 6,
    title: "Becoming a better public speaker 101",
    description: "Here's what I learnt about public speaking this month",
    image: publicspeaking,
    date: Date.now(),
    category: "month 4",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "Speech must-haves:  " },
        { type: "paragraph", text: " 1. Body language - builds rapport, enhances credibility" },
        { type: "paragraph", text: "2. Vocal variety - using pitch, pause and pace for emphasis and transitions" },
        { type: "paragraph", text: "3. Embellish your speech- use similes, metaphors, alliteration, triads, vivid description" },
        { type: "paragraph", text: "4. Visual aids and props - grab attention, enhance retention, evoke emotion" },
        { type: "heading", text: "A good story must-haves:" },
        { type: "paragraph", text: "1. Structure - introduction, body and conclusion" },
        { type: "paragraph", text: "2. Emotional engagement " },
        { type: "paragraph", text: "3. Authenticity - being candid enhances vulnerability, relatability, honesty" },
        { type: "paragraph", text: "4. Vivid description" },
        { type: "paragraph", text: "5. Anatomy : setup, inciting incident, progressive complication, insight, climax, lesson " }

    ]
},
{
    id: 7,
    title: "Stressing over problem ideation? Here's a guide",
    description: "Here's what I learnt in problem ideation this month",
    image: problemideation,
    date: Date.now(),
    category: "month 4",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "How do you ideate problems worth solving?:  " },
        { type: "paragraph", text: "1. Decision thinking(should be human-centered) and its steps: Empathize, define, ideate, prototype, test" },
        { type: "paragraph", text: "2. Problem ideation: - calls for innovation, problem-solving under covering underlying issues, avoiding resource wastage" },
        { type: "paragraph", text: "3. Problem ideation models: - brainstorming, SCAMPER, brainwriting, 5 whys" },
        { type: "paragraph", text: "4. Brainstorming rules: - no judgment, quantity over quality, build on other's ideas, encourage wild and creative ideas" },
        { type: "paragraph", text: "5. Problem Statement: - general problem, specific problem, target people, importance of solving it" }

    ]
},
{
    id: 8,
    title: "ICT explained",
    description: "Here's what I learnt in the ICT tracks this month",
    image: ict,
    date: Date.now(),
    category: "month 4",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "Data Science : Beginners guide to data exploration using SQL" },
        { type: "paragraph", text: " 1.Setting up the sqlite 3 database" },
        { type: "paragraph", text: "2. Forming tables in the database" },
        { type: "paragraph", text: "3. SQL commands learnt, insert, update, delete, joins, group by" },
    ]
},
{
    id: 9,
    title: "Learning how to Innovate with KamiLimu",
    description: "Here's what I learnt in the innovation in practice this month",
    image: innovation,
    date: Date.now(),
    category: "month 4",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "How to succeed in innovation: Tips for team effectiveness:" },
        { type: "paragraph", text: " 1.Communication" },
        { type: "paragraph", text: "2.Feedback" },
        { type: "paragraph", text: "3.Organization" },
        { type: "paragraph", text: "4.Collective contribution" },
    ]
},
{
    id: 10,
    title: "Enhancing your skills in Scholarship Writing",
    description: "Here's what I learn't in Scholarship Writing this month",
    image: scholarship,
    date: Date.now(),
    category: "month 4",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "Takeaways from the panelists on scholarship applications" },
        { type: "paragraph", text: " 1. Do internships" },
        { type: "paragraph", text: "2. Be engaged in your school life and talk to professors" },
        { type: "paragraph", text: "3. Mentorship" },
        { type: "paragraph", text: "4. Deep reflective thinking is important" },
        { type: "paragraph", text: "5. Check the institution's mission and vision to assess compatibility" },
        { type: "paragraph", text: "6. Prepare a question for the interview" },
        { type: "paragraph", text: "7. Know who will interview you and say thank you" },
    ]

},
{
    id: 11,
    title: "Let's use data structures to solve problems!",
    description: "Here's what I learn't in problem solving using data structures this month",
    image: problemsolving,
    date: Date.now(),
    category: "month 4",
    author: "Angela Kinoro",
    content: [
        { type: "heading", text: "Data Structures: Singly Linked List" },
        { type: "paragraph", text: " 1. Allows a growing undefined size as opposed to arrays that have to be pre-declared in size" },
        { type: "paragraph", text: "2. Is a sequence of nodes " },
        { type: "paragraph", text: "3. Each node contains: data, reference/pointer to the next node" },
        { type: "paragraph", text: "4. No memory wastage" },
        { type: "paragraph", text: "5. Efficient insertion and deletion" },
        { type: "paragraph", text: "6. Can be implemented using in-built libraries or hardcore" },
        { type: "heading", text: "Implementation" },
        { type: "paragraph", text: " 1. The head node is empty when we start" },
        { type: "paragraph", text: "2. Implement a variable that holds the data" },
        { type: "paragraph", text: "3. Implement a variable that holds the pointer of the next node" },
        { type: "paragraph", text: "4. Implement methods to fetch/reach the data" },
        { type: "paragraph", text: "5. Insert the new node into the list" },
        { type: "paragraph", text: "6. Link the previous pointer to the new node" },
        { type: "paragraph", text: "7. Have methods that remove nodes" },
        { type: "paragraph", text: "8. Have methods that print the data contained in the node" },
    ]

},]

