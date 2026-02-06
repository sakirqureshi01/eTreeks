// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
// import BestCourses from "./BestCourses";

 

// function DemoBooking() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     date: "",
//     slot: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("🎉 Demo Class Booked Successfully!");
//     console.log(formData);
//   };

//   return (
//     <>
//     <Container className="my-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card className="shadow p-4">
//             <h3 className="text-center mb-4">Book Free Demo Class</h3>

//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   required
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   required
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="tel"
//                   name="phone"
//                   placeholder="Mobile Number"
//                   required
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Select
//                   name="course"
//                   required
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Course</option>
//                   <option>Software Developer</option>
//                   <option>UI/UX Designer</option>
//                   <option>DevOps</option>
//                   <option>Cloud Engineer – AWS, Azure & GCP</option>
//                   <option>Software Test Engineer</option>
//                   <option>Automation Engineer</option>
//                   <option>Performance Test Engineer</option>
//                   <option>Banking Insurance & Finance</option>
//                   <option>Data Science</option>
//                   <option>Data Analytics</option>
//                   <option>Data Engineer</option>
//                   <option>AI / ML</option>
//                 </Form.Select>
        
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="date"
//                   name="date"
//                   required
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Select
//                   name="slot"
//                   required
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Time Slot</option>
//                   <option>10:00 AM – 11:00 AM</option>
//                   <option>2:00 PM – 3:00 PM</option>
//                   <option>6:00 PM – 7:00 PM</option>
//                 </Form.Select>
//               </Form.Group>

//               <Button variant="danger" type="submit" className="w-100">
//                 Book Demo
//               </Button>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//     <BestCourses/>
//     </>
//   );
// }

// export default DemoBooking;



import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import BestCourses from "./BestCourses";

function DemoBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    date: "",
    slot: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_feg33fb",   // 👈 EmailJS Service ID
        "template_18tfvzf",  // 👈 EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          date: formData.date,
          slot: formData.slot,
          to_email: "sakirqureshi9116@gmail.com",
        },
        "PVVv8PGNAEkZTqTLP"    // 👈 EmailJS Public Key
      )
      .then(
        () => {
          alert("🎉 Demo Class Booked & Email Sent Successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            date: "",
            slot: "",
          });
        },
        (error) => {
          console.error(error);
          alert("❌ Email sending failed");
        }
      );
  };

  return (
    <>
    <section className="py-5 "
     
      style={{
        minHeight: "90vh",
        backgroundImage:
          "url('https://qspiders.com/BackgroundWave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow p-4">
              <h3 className="text-center mb-4">Book Free Demo Class</h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Select
                    name="course"
                    value={formData.course}
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select Course</option>
                    <option>Software Developer</option>
                    <option>UI/UX Designer</option>
                    <option>DevOps</option>
                    <option>Cloud Engineer – AWS, Azure & GCP</option>
                    <option>Software Test Engineer</option>
                    <option>Automation Engineer</option>
                    <option>Performance Test Engineer</option>
                    <option>Banking Insurance & Finance</option>
                    <option>Data Science</option>
                    <option>Data Analytics</option>
                    <option>Data Engineer</option>
                    <option>AI / ML</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Select
                    name="slot"
                    value={formData.slot}
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select Time Slot</option>
                    <option>10:00 AM – 11:00 AM</option>
                    <option>2:00 PM – 3:00 PM</option>
                    <option>6:00 PM – 7:00 PM</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="danger" type="submit" className="w-100">
                  Book Demo
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
</section>
      <BestCourses />
    </>
  );
}

export default DemoBooking;






