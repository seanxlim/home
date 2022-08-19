const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://seanxlim.github.io/home',
  title: 'SL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sean Lim',
  role: 'student, creator, and music enthusiast',
  description:'I am a driven and fascinated second-year student at the University of Washington, passionate about exploring the intersections of technology and human values, to better understand and solve real-world issues. I am eager to explore opportunities in project management, and UI/UX! In my free time, you can find me enjoying home-cooking, sports, and different kinds of tea 🍵 ',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vSITcoG4p3h_dmKtuFm3eNgfVDCF5a8m2DnbQ5KSzLPfl1jrERcQhtHo_xf6l1IsOv_qbBByHoFdc6n/pub',
  social: {
    linkedin: 'https://www.linkedin.com/in/aseanlim/',
    github: 'https://github.com/seanxlim',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Dietary Health and COVID Mortality',
    description:
      'Designed a web application that facilitates the exploration of our teams dataset(s) through interactions and visualizations. Worked with live COVID-19 and global food datasets from the New York Times to explore the relationship between diet and COVID-19 mortality.',
    stack: ['R-Code', 'R Shiny', 'Github'],
    sourceCode: 'https://jerry020.shinyapps.io/source/',
    livePreview: 'https://jerry020.shinyapps.io/source/',
  },
  {
    name: 'Husky Charge',
    description:
      'Analyzed pre-exisiting charging stations on the University of Washington campus and then created a proposed redesign to increase the accessibility and use of chargers for students and faculty on campus.',
    stack: ['Word', 'Figma'],
    sourceCode: 'https://github.com/seanxlim/huskycharge/blob/main/Husky%20Charge%20Final%20Prototype.pdf',
    livePreview: 'https://github.com/seanxlim/huskycharge/blob/main/Husky%20Charge%20Final%20Prototype.pdf',
  },
  {
    name: 'Racial Bias in Computer Vision',
    description:
      'Our team analyzed the widely popular UTKFace dataset to implement a Convolutional Neural Network (CNN) algorithm, used to predict gender given an image of a human. By further investigating the current policy as it comes to data collection and privacy, we hope to suggest practices that will lead humanity to a safer, more equal future.',
    stack: ['Atom', 'Latex', 'Python'],
    sourceCode: 'https://www.techrxiv.org/articles/preprint/Racial_Bias_in_Computer_Vision_via_Convolutional_Neural_Networks/20323818',
    livePreview: 'https://www.techrxiv.org/articles/preprint/Racial_Bias_in_Computer_Vision_via_Convolutional_Neural_Networks/20323818',
  },
  ]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'R',
  'Figma',
  'Canva',
  'Photoshop',
  'React',
  'UI/UX',
  'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'seanxlim@uw.edu',
}

export { header, about, projects, skills, contact }
