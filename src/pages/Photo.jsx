import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Photo(){
     const navigate=useNavigate();
const [files, setFiles] = useState([]);
const [photos, setPhotos] = useState([]);
const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [modalShowpassword, setModalShowPassword] =useState(false);
  const [modalShowfile, setModalShowFile] =useState(false);
  const [adminpassword,setAdminpassword]=useState('');
    const [personalpassword,setPersonalpassword]=useState('');
    const handleadminpassword=(e)=>{setAdminpassword(e.target.value);}
    const personaladminpassword=(e)=>{setPersonalpassword(e.target.value);}
    const admin_change=()=>{
      const dt={newPassword:adminpassword}
      axios.put("https://wzajrdnvabjiwbsvacsj.functions.supabase.co/auth-api/admin/update-password",dt)
      .then(res=>{
        if(res.data.success) {
            alert("Password Update Successfully....!✅");
                  setModalShowPassword(false);
          }else{{alert(res.data.error || "Password Update failed");}}})}


    const personal_change=()=>{
      const dt={newPassword:personalpassword}
      axios.put("https://wzajrdnvabjiwbsvacsj.functions.supabase.co/auth-api/personal/update-password",dt)
      .then(res=>{
        if(res.data.success) {
            alert("Login Successfully....!✅");
             setModalShowPassword(false);}
             else{{alert(res.data.error || "Login failed");}}})}
 

const Upload_Photo = async () => {
  if (files.length === 0) {
    alert("Choose file first");
    return;
  }

  try {
    setLoading(true);
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      await axios.post(
        "https://wzajrdnvabjiwbsvacsj.functions.supabase.co/auth-api/upload",
        formData,
        {
          headers: {
            "x-login": localStorage.getItem("isLogin"),
          },
        }
      );
    }

    alert("All Photos Uploaded ✅");
    setModalShowFile(false);

    setRefresh((p) => !p); // gallery reload
  } catch {
    alert("Upload failed");
  }finally {
    setLoading(false);}
};

{/*}
const Upload_Photo = () => {
  if (!file) {alert("Choose file first");return;}
  const formData = new FormData();
  formData.append("file", file);

  axios.post("https://wzajrdnvabjiwbsvacsj.functions.supabase.co/auth-api/upload/image",formData,{
        headers: {"x-login": localStorage.getItem("isLogin"),},})
    .then((res) => {
      if (res.data.success) {
        alert("Photo Upload Successful ✅");
        setModalShowFile(false);
        setRefresh((prev) => !prev);
      } else {
        alert(res.data.error || "Upload failed");}})
    .catch(() => {alert("Server error");});};
{*/}
useEffect(() => {
  axios
    .get("https://wzajrdnvabjiwbsvacsj.functions.supabase.co/auth-api/images")
    .then((res) => {
      if (res.data.success)
         {setPhotos(res.data.data);}})
    .catch(() => {
      alert("Load failed");});},[refresh]);

useEffect(() => {
  const expiry = localStorage.getItem("expiry");
  if (!expiry) return;

  const timeLeft = expiry - Date.now();

  if (timeLeft <= 0) {
    localStorage.clear();
    alert("Session expired. Login again.");
    navigate("/");
  } else {
    const timer = setTimeout(() => {
      localStorage.clear();
      alert("Session expired. Login again.");
      navigate("/");
    }, timeLeft);

    return () => clearTimeout(timer);
  }
}, []);

    const handlelogout=()=>{ localStorage.clear();navigate('/');}

    return(
        <>
           <Navbar variant="dark">
      <Container fluid className="d-flex align-items-center">

        {/* LEFT */}
        <div className="me-auto">
          <Button className='photo-btn' variant="warning"  onClick={handlelogout}>
            Logout
          </Button>
        </div>

        {/* CENTER */}
        <div className="mx-auto">
          <Button  className='upload-btn' variant="success" onClick={() => setModalShowFile(true)} >
            Upload Photo/Video
          </Button>
        </div>

        {/* RIGHT */}
        <div className="ms-auto">
          <Button className='photo-btn' variant="warning"  onClick={() => setModalShowPassword(true)} >
            Password
          </Button>
        </div>
      </Container>
    </Navbar>
        <div className="header"><div className="inner-admin">Welcome Shivani Pandey</div></div>
        <div className="home">

 
<div className="gallery">
  {photos.map((item) => (
    <Card
      key={item.id}
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={() => setPreview(item)}   // 🔥 yahi magic
    >
      {item.type === "image" ? (
        <Card.Img
          variant="top"
          src={item.url}
          style={{ height: "200px", objectFit: "cover" }}
        />
      ) : (
        <video
          src={item.url}
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
        />
      )}
    </Card>
  ))}
</div>



</div>

{/*}------------------------------------------------
        {/*}Module From
-------------------------------------------------------  {*/}     
{/*}==========================================
                 UPLOAD PHOTO
=============================================={*/}
     
<Modal
      show={modalShowfile} onHide={()=>setModalShowFile(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Photo/Video
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label className='admin-passwordlbl'>Select Photo/Video :-</Form.Label>
        <Form.Control type="file"  onChange={(e) => setFiles([...e.target.files])} multiple />
      </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button className='upload-btn' onClick={()=>setModalShowFile(false)}>Close</Button>
         <button className='upload-btn' onClick={Upload_Photo} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}</button>
      </Modal.Footer>
    </Modal>


{/*}=================================
              UPDATE PASSWORD
===================================={*/}

    <Modal
      show={modalShowpassword} onHide={()=>setModalShowPassword(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
              Password Update
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="admin-box">
      <Form.Label htmlFor="inputPassword5" className='admin-passwordlbl'>Admin Password :-</Form.Label>
      <Form.Control type="password"id="inputPassword5" className='admin-passwordfrom' onChange={handleadminpassword} aria-describedby="passwordHelpBlock"/>
       <Button variant="primary" className='admin-btn' onClick={admin_change}>Admin Password Update</Button>
       </div>
       <div className="admin-box">
       <Form.Label htmlFor="inputPassword5" className='admin-passwordlbl'>Personal Password:- </Form.Label>
      <Form.Control type="password"id="inputPassword5" className='admin-passwordfrom' onChange={personaladminpassword} aria-describedby="passwordHelpBlock"/>
            <Button variant="info" className='admin-btn' onClick={personal_change}>Personal Password Update</Button>

     </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='upload-btn' onClick={()=>setModalShowPassword(false)}>Close</Button>
      </Modal.Footer>
    </Modal>



  {/*}======================================
                  Photo Show
  =========================================={*/}  

 <Modal
  show={!!preview}
  onHide={() => setPreview(null)}
  centered
  size="xl"
>
  <Modal.Body style={{ padding: 0, textAlign: "center", background: "#000" }}>
    {preview?.type === "image" ? (
      <img
        src={preview?.url}
        alt="preview"
        style={{
          width: "100%",
          height: "80vh",
          objectFit: "contain",
        }}
      />
    ) : (
      <video
        src={preview?.url}
        controls
        autoPlay
        style={{
          width: "100%",
          height: "80vh",
          objectFit: "contain",
        }}
      />
    )}
  </Modal.Body>
</Modal>       </>
    )
}