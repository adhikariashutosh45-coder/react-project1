import './App.css'
import Card from './components/card'

const jobOpenings = [
  {
    company: "Amazon",
    posted: "5 days ago",
    position: "Senior UI and UX Designer",
    jobType: "Part-time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    image: "https://tse1.mm.bing.net/th/id/OIP.douAQqLQCydHXDqsPfOcpwHaEK?r=0&pid=Api&h=220&P=0"
  },
  {
    company: "Google",
    posted: "2 days ago",
    position: "Frontend Developer",
    jobType: "Full-time",
    level: "Mid Level",
    salary: "$100/hr",
    location: "Bangalore, India",
    image: "https://example.com/google.png"
  },
  {
    company: "Microsoft",
    posted: "1 day ago",
    position: "Backend Developer",
    jobType: "Full-time",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Hyderabad, India",
    image: "https://example.com/microsoft.png"
  },
  {
    company: "Netflix",
    posted: "3 days ago",
    position: "UI Designer",
    jobType: "Part-time",
    level: "Junior Level",
    salary: "$80/hr",
    location: "Remote",
    image: "https://example.com/netflix.png"
  },
  
  {
    company: "Adobe",
    posted: "4 days ago",
    position: "UI/UX Designer",
    jobType: "Full-time",
    level: "Mid Level",
    salary: "$90/hr",
    location: "Noida, India",
    image: "https://placehold.co/100x100?text=Adobe"
  },
  {
    company: "Spotify",
    posted: "1 day ago",
    position: "React Developer",
    jobType: "Full-time",
    level: "Junior Level",
    salary: "$75/hr",
    location: "Remote",
    image: "https://placehold.co/100x100?text=Spotify"
  },
  {
    company: "Tesla",
    posted: "3 days ago",
    position: "Python Developer",
    jobType: "Full-time",
    level: "Senior Level",
    salary: "$105/hr",
    location: "Pune, India",
    image: "https://placehold.co/100x100?text=Tesla"
  },
  {
    company: "IBM",
    posted: "2 days ago",
    position: "Data Analyst",
    jobType: "Part-time",
    level: "Junior Level",
    salary: "$60/hr",
    location: "Bengaluru, India",
    image: "https://placehold.co/100x100?text=IBM"
  },
  {
    company: "NVIDIA",
    posted: "6 days ago",
    position: "Machine Learning Engineer",
    jobType: "Full-time",
    level: "Mid Level",
    salary: "$130/hr",
    location: "Hyderabad, India",
    image: "https://placehold.co/100x100?text=NVIDIA"
  },
  {
    company: "Cisco",
    posted: "5 days ago",
    position: "Cybersecurity Analyst",
    jobType: "Full-time",
    level: "Mid Level",
    salary: "$95/hr",
    location: "Chennai, India",
    image: "https://placehold.co/100x100?text=Cisco"
  },
  {
    company: "Salesforce",
    posted: "Today",
    position: "Backend Developer",
    jobType: "Full-time",
    level: "Junior Level",
    salary: "$85/hr",
    location: "Mumbai, India",
    image: "https://placehold.co/100x100?text=Salesforce"
  },
  {
    company: "Intel",
    posted: "3 days ago",
    position: "DevOps Engineer",
    jobType: "Full-time",
    level: "Senior Level",
    salary: "$115/hr",
    location: "Bengaluru, India",
    image: "https://placehold.co/100x100?text=Intel"
  }

];
const jobfunction=()=>{
   return( jobOpenings.map((elem) => (
        <Card key={elem.company} {...elem} />
      )))
}

function App() {
  return (
    <>
    <div className="job-container">
      {jobfunction()}
    </div>
      
    </>
  );
}

export default App;
