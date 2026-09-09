export type ServiceCard = {
  number: string;
  title: string;
  description: string;
  to: string;
  icon: 'ear' | 'speech' | 'hand' | 'waves' | 'book' | 'baby';
};

export const services: ServiceCard[] = [
{
  number: '01',
  title: 'Pediatric Audiology',
  description:
  'Hearing assessment, hearing rehabilitation and ongoing audiological management for children.',
  to: '/pediatric-audiology',
  icon: 'ear'
},
{
  number: '02',
  title: 'Speech & Language Therapy',
  description:
  'Individualised therapy for speech, language, communication, articulation, fluency and related communication needs.',
  to: '/speech-language-therapy',
  icon: 'speech'
},
{
  number: '03',
  title: 'Occupational Therapy',
  description:
  'Support for functional skills, fine motor development, self-care, school participation and everyday activities.',
  to: '/occupational-therapy',
  icon: 'hand'
},
{
  number: '04',
  title: 'Sensory Integration',
  description:
  'Structured occupational therapy-based intervention addressing sensory processing and functional participation.',
  to: '/sensory-integration',
  icon: 'waves'
},
{
  number: '05',
  title: 'Special Education',
  description:
  'Individualised educational support for children who require additional assistance with learning, academic skills and classroom participation.',
  to: '/special-education',
  icon: 'book'
},
{
  number: '06',
  title: 'Early Intervention',
  description:
  'Development-focused support for infants and young children when concerns are identified early.',
  to: '/early-intervention',
  icon: 'baby'
}];


export const whyParc = [
{
  title: 'Pediatric-Focused Care',
  description:
  'Our services are designed specifically around the needs of infants, toddlers, children and adolescents.',
  icon: 'baby' as const
},
{
  title: 'Multidisciplinary Team',
  description:
  'Audiology, speech-language therapy, occupational therapy, sensory integration and special education work together to address different aspects of development.',
  icon: 'users' as const
},
{
  title: 'Individualised Programs',
  description:
  "There is no single therapy plan that works for every child. Goals are developed according to the child's assessment and functional needs.",
  icon: 'target' as const
},
{
  title: 'Family-Centred Approach',
  description:
  'Parents are an important part of the intervention process. We provide practical strategies that can be incorporated into everyday routines.',
  icon: 'heart' as const
},
{
  title: 'Progress Monitoring',
  description:
  'Therapy should have measurable goals. We monitor development and modify intervention plans as appropriate.',
  icon: 'chart' as const
},
{
  title: 'Early Intervention Focus',
  description:
  'Early identification and timely intervention can provide children with greater opportunities to develop communication, learning and functional skills.',
  icon: 'clock' as const
}];


export const processSteps = [
{ label: 'Assess', detail: 'Age-appropriate assessment across relevant developmental areas.' },
{ label: 'Understand', detail: "Interpret findings in the context of the child's daily life." },
{ label: 'Plan', detail: 'Set individualised, functional goals with the family.' },
{ label: 'Intervene', detail: 'Structured intervention delivered by the relevant disciplines.' },
{ label: 'Monitor', detail: 'Review progress against goals and adjust as appropriate.' },
{ label: 'Support', detail: 'Guide parents, caregivers and schools beyond the therapy room.' }];


export const disciplines = [
{ title: 'Audiology', subtitle: 'Hearing & Listening', icon: 'ear' as const },
{ title: 'Speech & Language', subtitle: 'Communication', icon: 'speech' as const },
{ title: 'Occupational Therapy', subtitle: 'Function & Participation', icon: 'hand' as const },
{ title: 'Sensory Integration', subtitle: 'Sensory Processing & Regulation', icon: 'waves' as const },
{ title: 'Special Education', subtitle: 'Learning & Academic Development', icon: 'book' as const }];


export const assessmentAreas = [
'Hearing',
'Speech',
'Language',
'Communication',
'Cognition / Learning',
'Fine Motor Skills',
'Gross Motor Skills',
'Sensory Processing',
'Self-Care',
'Social Participation',
'School Readiness'];


export const concerns = [
'Hearing Loss',
'Speech Delay',
'Language Delay',
'Late Talking',
'Communication Difficulties',
'Speech Sound Difficulties',
'Developmental Delays',
'Autism-Related Communication and Functional Needs',
'Attention-Related Concerns',
'Sensory Processing Difficulties',
'Fine Motor Difficulties',
'Gross Motor Coordination Difficulties',
'Learning Difficulties',
'School Readiness Difficulties',
'Social Communication Difficulties',
'Auditory Development Concerns'];


export const parentQuestions = [
"Why isn't my child speaking?",
'Does my child need a hearing test?',
'Should we start speech therapy?',
'Why does my child avoid certain sounds or touch?',
'Why is writing difficult?',
'Is my child ready for school?',
'Which therapy should we start first?'];


export const parcDifference = [
{ number: '01', title: 'Child-Centred', description: 'The child comes before the diagnosis.' },
{
  number: '02',
  title: 'Multidisciplinary',
  description: 'Different professionals work toward connected developmental goals.'
},
{
  number: '03',
  title: 'Individualised',
  description: 'Therapy goals are based on assessment rather than a standard package.'
},
{
  number: '04',
  title: 'Family Involvement',
  description: 'Parents receive guidance to support development beyond the clinic.'
},
{
  number: '05',
  title: 'Functional Goals',
  description: 'We focus on meaningful participation in everyday life.'
},
{
  number: '06',
  title: 'Progress Focused',
  description: 'Goals and intervention plans can be reviewed as the child develops.'
}];


export const missionPillars = [
'Early Identification',
'Accurate Assessment',
'Individualised Intervention',
'Family Involvement',
'Progress Monitoring',
'Functional Outcomes'];


export const faqs = [
{
  question: 'What age children does PARC support?',
  answer:
  'PARC supports infants, toddlers, children and adolescents. The type of assessment and intervention used may differ depending on the age and developmental stage of the child.'
},
{
  question: 'My child is not speaking. Should I wait?',
  answer:
  'If you have a concern about your child’s communication, an assessment can help you understand what is happening rather than waiting to see. Assessment may include hearing, speech and language evaluation depending on the child’s age and presentation.'
},
{
  question: 'Does every child with speech delay need a hearing test?',
  answer:
  'Hearing plays an important role in speech and language development, so hearing status is commonly reviewed as part of understanding a communication delay. The audiologist will advise which age-appropriate tests may be relevant.'
},
{
  question: 'What is sensory integration therapy?',
  answer:
  'Sensory integration therapy is an occupational therapy-based approach that looks at how a child processes and responds to sensory information, and how that may be affecting participation in everyday activities.'
},
{
  question: 'Does PARC provide occupational therapy?',
  answer:
  'Yes. Pediatric occupational therapy at PARC focuses on functional skills such as fine motor development, self-care, motor planning, attention to activity and school participation.'
},
{
  question: 'Can speech therapy help children with hearing loss?',
  answer:
  'Speech and language support is often part of hearing rehabilitation. For children using hearing aids or a cochlear implant, intervention may include auditory skill development alongside speech and language goals.'
},
{
  question: 'Does PARC provide special education?',
  answer:
  'Yes. Special education at PARC focuses on identifying a child’s learning profile and building individualised educational support around their abilities and needs.'
},
{
  question: 'Can different therapies be taken at the same centre?',
  answer:
  'Yes. PARC is designed as a multidisciplinary centre so that audiology, speech-language therapy, occupational therapy, sensory integration and special education can work from one coordinated plan.'
},
{
  question: 'How do I know which therapy my child needs?',
  answer:
  'Start with an appropriate assessment. Findings across the relevant developmental areas help determine which services may be required and in what order.'
}];