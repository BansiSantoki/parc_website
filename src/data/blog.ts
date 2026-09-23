import { images } from './site';

export type BlogCategory =
'Audiology' |
'Speech & Language' |
'Occupational Therapy' |
'Sensory' |
'Special Education' |
'Early Intervention' |
'Parent Guidance';

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  category: BlogCategory;
  excerpt: string;
  readTime: string;
};

export const blogCategories: BlogCategory[] = [
'Audiology',
'Speech & Language',
'Occupational Therapy',
'Sensory',
'Special Education',
'Early Intervention',
'Parent Guidance'];

export const blogImageByCategory: Record<BlogCategory, string> = {
  Audiology: images.audiology,
  'Speech & Language': images.speech,
  'Occupational Therapy': images.ot,
  Sensory: images.sensory,
  'Special Education': images.education,
  'Early Intervention': images.early,
  'Parent Guidance': images.about
};


export const blogPosts: BlogPost[] = [
{
  id: 1,
  title: 'Speech Delay in Children: When Should Parents Seek Help?',
  slug: 'speech-delay-in-children-when-to-seek-help',
  category: 'Speech & Language',
  excerpt:
  'A parent-friendly look at communication milestones and the signs that may indicate it is worth speaking to a professional.',
  readTime: '6 min read'
},
{
  id: 2,
  title: 'How Do I Know If My Child Has a Hearing Problem?',
  slug: 'how-do-i-know-if-my-child-has-a-hearing-problem',
  category: 'Audiology',
  excerpt:
  'Everyday observations at home that may suggest a hearing assessment could be helpful for your child.',
  readTime: '5 min read'
},
{
  id: 3,
  title: 'Why Hearing Assessment Is Important for Children With Speech Delay',
  slug: 'hearing-assessment-and-speech-delay',
  category: 'Audiology',
  excerpt:
  'Understanding the link between hearing and early speech and language development.',
  readTime: '5 min read'
},
{
  id: 4,
  title: "Speech Delay vs Language Delay: What's the Difference?",
  slug: 'speech-delay-vs-language-delay',
  category: 'Speech & Language',
  excerpt:
  'Two terms parents often hear together, explained simply and without jargon.',
  readTime: '4 min read'
},
{
  id: 5,
  title: 'When Should a Child Start Speaking?',
  slug: 'when-should-a-child-start-speaking',
  category: 'Speech & Language',
  excerpt:
  'A general guide to early communication development and why every child follows their own pace.',
  readTime: '6 min read'
},
{
  id: 6,
  title: 'What Is Pediatric Audiology?',
  slug: 'what-is-pediatric-audiology',
  category: 'Audiology',
  excerpt:
  'What pediatric audiologists look at, and how it differs from adult hearing care.',
  readTime: '5 min read'
},
{
  id: 7,
  title: 'What Happens During a Child Hearing Test?',
  slug: 'what-happens-during-a-child-hearing-test',
  category: 'Audiology',
  excerpt:
  'A step-by-step walkthrough so you and your child know what to expect on the day.',
  readTime: '5 min read'
},
{
  id: 8,
  title: 'OAE vs BERA/ABR: Understanding Pediatric Hearing Tests',
  slug: 'oae-vs-bera-abr',
  category: 'Audiology',
  excerpt:
  'What these tests may tell us and why different tests are used at different ages.',
  readTime: '7 min read'
},
{
  id: 9,
  title: "Hearing Aids for Children: A Parent's Guide",
  slug: 'hearing-aids-for-children-parents-guide',
  category: 'Audiology',
  excerpt:
  'From fitting and programming to daily use, orientation and follow-up.',
  readTime: '8 min read'
},
{
  id: 10,
  title: 'Cochlear Implant Rehabilitation for Children',
  slug: 'cochlear-implant-rehabilitation-for-children',
  category: 'Audiology',
  excerpt:
  'Why rehabilitation continues after the device, and what auditory skill development involves.',
  readTime: '7 min read'
},
{
  id: 11,
  title: 'What Is Occupational Therapy for Children?',
  slug: 'what-is-occupational-therapy-for-children',
  category: 'Occupational Therapy',
  excerpt:
  'How pediatric OT supports participation in play, learning, self-care and school.',
  readTime: '6 min read'
},
{
  id: 12,
  title: 'Signs Your Child May Need Occupational Therapy',
  slug: 'signs-your-child-may-need-occupational-therapy',
  category: 'Occupational Therapy',
  excerpt:
  'Everyday difficulties that may point to functional or motor skill support.',
  readTime: '5 min read'
},
{
  id: 13,
  title: 'What Is Sensory Processing?',
  slug: 'what-is-sensory-processing',
  category: 'Sensory',
  excerpt:
  'Sensory processing explained in plain language, with everyday examples.',
  readTime: '5 min read'
},
{
  id: 14,
  title: "Sensory Integration Therapy: A Parent's Guide",
  slug: 'sensory-integration-therapy-parents-guide',
  category: 'Sensory',
  excerpt:
  'What a sensory integration approach may look like and how goals are set.',
  readTime: '7 min read'
},
{
  id: 15,
  title: 'Why Does My Child Avoid Certain Sounds or Textures?',
  slug: 'why-does-my-child-avoid-certain-sounds-or-textures',
  category: 'Sensory',
  excerpt:
  'Understanding sensory sensitivity and how it can affect daily routines.',
  readTime: '5 min read'
},
{
  id: 16,
  title: 'Fine Motor Skills in Children: What Parents Should Know',
  slug: 'fine-motor-skills-in-children',
  category: 'Occupational Therapy',
  excerpt:
  'How hand skills develop and how they connect to writing and self-care.',
  readTime: '6 min read'
},
{
  id: 17,
  title: 'School Readiness Skills Every Parent Should Know',
  slug: 'school-readiness-skills',
  category: 'Special Education',
  excerpt:
  'Readiness is more than academics — attention, communication and independence matter too.',
  readTime: '6 min read'
},
{
  id: 18,
  title: 'Special Education: When Does a Child Need Learning Support?',
  slug: 'when-does-a-child-need-learning-support',
  category: 'Special Education',
  excerpt:
  'Recognising learning difficulties and understanding individualised educational planning.',
  readTime: '6 min read'
},
{
  id: 19,
  title: 'Early Intervention: Why Early Support Matters',
  slug: 'early-intervention-why-early-support-matters',
  category: 'Early Intervention',
  excerpt:
  'How timely identification and support can create more developmental opportunities.',
  readTime: '5 min read'
},
{
  id: 20,
  title: 'Speech Therapy Activities Parents Can Try at Home',
  slug: 'speech-therapy-activities-at-home',
  category: 'Parent Guidance',
  excerpt:
  'Simple, everyday communication opportunities you can build into daily routines.',
  readTime: '6 min read'
},
{
  id: 21,
  title: 'How Parents Can Encourage Language Development Through Play',
  slug: 'encourage-language-development-through-play',
  category: 'Parent Guidance',
  excerpt:
  'Play is a natural setting for language learning. Here is how to make the most of it.',
  readTime: '6 min read'
},
{
  id: 22,
  title: "My Child Understands Everything But Doesn't Speak",
  slug: 'my-child-understands-but-does-not-speak',
  category: 'Speech & Language',
  excerpt:
  'The difference between understanding and expression, and why both are assessed.',
  readTime: '5 min read'
},
{
  id: 23,
  title: 'Why Does My Child Have Difficulty Following Instructions?',
  slug: 'difficulty-following-instructions',
  category: 'Parent Guidance',
  excerpt:
  'Hearing, language, attention and processing can each play a part.',
  readTime: '5 min read'
},
{
  id: 24,
  title: 'Multidisciplinary Pediatric Rehabilitation: Why Teamwork Matters',
  slug: 'multidisciplinary-pediatric-rehabilitation',
  category: 'Early Intervention',
  excerpt:
  'What changes for a child when disciplines share one connected plan.',
  readTime: '6 min read'
},
{
  id: 25,
  title: 'Choosing a Pediatric Therapy Centre in Nashik',
  slug: 'choosing-a-pediatric-therapy-centre-in-nashik',
  category: 'Parent Guidance',
  excerpt:
  'Practical questions parents can ask before starting therapy for their child.',
  readTime: '6 min read'
}];


export const parentGuidanceAreas = [
'Home Routines',
'Play',
'Mealtimes',
'Communication Opportunities',
'Reading',
'School Preparation',
'Daily Self-Care',
'Listening Activities',
'Sensory Routines Where Appropriate'];