let Huglaptop=[1750,2300,3000,3770,4500,4900] 
let moblie=[1040,1300,1950,2200,2430,2730] 
let smallmoblie=[1140,1580,2100,2570,2800,3000] 
let moblieorientations=[2240,2700,3300,4000,4500,5000] 
let Tablet=[1900,2300,2800,3300,3800,4280]
let Hlaptop=[1800,2300,2900,3760,4250,4830]

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