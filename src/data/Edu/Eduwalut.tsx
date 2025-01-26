let Huglaptop=[900,1500,2400,3000,3700,4190] 
let moblie=[600,800,1150,1600,1770,2000] 
let smallmoblie=[840,1180,1600,1770,2000,2200] 
let moblieorientations=[1300,1900,2660,3200,3750,4300] 
let Tablet=[900,1300,1900,2400,3000,3500]
let Hlaptop=[900,1500,2000,2760,3250,3830]

export function detectDevice() {
    const width = window.innerWidth;
    const height=window.innerHeight;
    let deviceType;
      
    switch (true) {
        case width <= 350:
        deviceType = smallmoblie;
        break;
      case width > 350 && width <= 768 :
        deviceType = moblie;
        break;
      case width > 768 && width <= 1024 && height < 480:
          deviceType =moblieorientations ;
          break;
      case width > 768 && width <= 1024:
        deviceType = Tablet;
        break;
      case width > 1024 && width <= 1280:
        deviceType = Hlaptop;
        break;
      case width > 1280:
            deviceType = Huglaptop;
            break;
      default:
        deviceType = "Unknown";
    }
  
    console.log(`Device: ${deviceType}`);
    return deviceType;
  }

//   detectDevice()
export const Educom=[
    {
        id:1,
        imgleftside:true,
        comheading:'EDU-VAULT',
        imgback:'/img/E-Bookbackground.svg',
        imgUp:'/img/E-Book.png',
        figure:'Your Path to Smarter Learning',
        decription:'Here we Provide E-books, study guides, and reference materials, past papers, handmade notes, while features like search, bookmarks, and offline access improve usability.',
        scrolltrack:detectDevice()[0]
    },
    {   
        id:2,
        imgleftside:false,
        comheading:'HUMAN LIBRARY',
        imgback:'/img/Humanback.svg',
        imgUp:'/img/Human.svg',
        figure:'A Community That Cares About What You Feels and Who You Are',
        decription:'A feature that allows individuals to share their stories, discuss their challenges, and seek guidance from others. Using a matching algorithm, you will be paired with people who can offer support, insights, or advice, creating meaningful connections with those they may not know',
        scrolltrack:detectDevice()[1]
    }
]

export const EducomSecond=[
    {
        id:1,
        imgleftside:false,
        comheading:'GUIEDNEST',
        imgback:'/img/guideback.svg',
        imgUp:'/img/guide.png',
        figure:'A Journey of Learning, Led by Those Who’ve Been There',
        decription:'Matches you with seniors or alumni or industry people and advisors from different universities to support your academic and career development.',
        scrolltrack:detectDevice()[3]
    },
    {   
        id:2,
        imgleftside:true,
        comheading:'NGO',
        imgback:'/img/NGOback.svg',
        imgUp:'/img/NGO.png',
        figure:'Building a Better Tomorrow by Supporting Communities Today',
        decription:'This feature offer you opportunities for volunteering for ngos, internships, and social impact projects, Skill-Based Volunteering and Event Collaboration',
        scrolltrack:detectDevice()[4]
    }
]