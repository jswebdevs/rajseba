import { React, useState, useEffect } from "react";
import "./Form.css";

const Mainform = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch the reviews data asynchronously
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
;
  }, []);

  const [selectedThana, setSelectedThana] = useState("");
  const handleThanaChange = (e) => {
    setSelectedThana(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("./FormReceive.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle success
        console.log("Email sent successfully!");
      } else {
        // Handle error
        console.error("Error sending email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container-wrapper">
      <h2 className="text-3xl text-bold">
        আমাদের যেকোন সেবা নিতে নীচের ফর্মটি পূরণ করুন
      </h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>নাম*</label>
            <input type="text" name="your-name" required />
          </div>

          <div className="form-field">
            <label>ই-মেইল</label>
            <input type="email" name="your-email" />
          </div>

          <div className="form-field">
            <label>ফোন নাম্বার* (১১ ডিজিট)</label>
            <input
              type="tel"
              name="phonenumber"
              required
              pattern="[0]{1}[1]{1}[3-9]{1}[0-9]{8}"
            />
          </div>

          <div className="form-field">
            <label>সেবা পছন্দ করুন*</label>
            <select name="service">
              <option value="">--সার্ভিস সিলেক্ট করুন--</option>
              {services.map((service) => (
                <option key={service.id} value={service.servicename}>{service.servicename}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label>Choose thana:</label>
            <select name="thana" required onChange={handleThanaChange}>
              <option value="">--থানা সিলেক্ট করুন--</option>
              <option value="মতিহার">মতিহার</option>
              <option value="রাজপাড়া">রাজপাড়া</option>
              <option value="বোয়ালিয়া">বোয়ালিয়া</option>
              <option value="শাহ-মখদুম">শাহ-মখদুম</option>
              <option value="চন্দ্রিমা">চন্দ্রিমা</option>
            </select>
          </div>

          {selectedThana === "মতিহার" && (
            <div className="form-field">
              <label>Choose area:</label>
              <select name="area">
                <option value="">--এরিয়া সিলেক্ট করুন--</option>
                <option value="কাজলা">কাজলা</option>
                <option value="বিনোদপুর">বিনোদপুর</option>
                <option value="ধরমপুর">ধরমপুর</option>
                <option value="রাজশাহী বিশ্ববিদ্যালয়">রাজশাহী বিশ্ববিদ্যালয়</option>
                <option value="রুয়েট">রুয়েট</option>
                <option value="তালাইমারি">তালাইমারি</option>
                <option value="চৌদ্দপাই">চৌদ্দপাই</option>
                <option value="বিহাস">বিহাস</option>
              </select>
            </div>
          )}

          {selectedThana === "রাজপাড়া" && (
            <div className="form-field">
              <label>Choose area:</label>
              <select name="area">
                <option value="">--এরিয়া সিলেক্ট করুন--</option>
                <option value="বহরমপুর">বহরমপুর</option>
                <option value="লক্ষীপুর">লক্ষীপুর</option>
                <option value="কেশবপুর">কেশবপুর</option>
                <option value="নবিনগর">নবিনগর</option>
                <option value="হেলেনাবাদ">হেলেনাবাদ</option>
                <option value="মহিষবাথান">মহিষবাথান</option>
                <option value="চন্ডীপুর">চন্ডীপুর</option>
                <option value="শ্রীরামপুর">শ্রীরামপুর</option>
                <option value="কাজীহাটা">কাজীহাটা</option>
                <option value="সিপাইপাড়া">সিপাইপাড়া</option>
                <option value="তেরখাদিয়া">তেরখাদিয়া</option>
                <option value="সপুরা">সপুরা</option>
              </select>
            </div>
          )}

          {selectedThana === "বোয়ালিয়া" && (
            <div className="form-field">
              <label>Choose area:</label>
              <select name="area">
                <option value="">--এরিয়া সিলেক্ট করুন--</option>
                <option value="দরগাপাড়া">দরগাপাড়া</option>
                <option value="হেতেম খাঁ">হেতেম খাঁ</option>
                <option value="কাদিরগঞ্জ">কাদিরগঞ্জ</option>
                <option value="সাহেব বাজার">সাহেব বাজার</option>
                <option value="সুলতানাবাদ">সুলতানাবাদ</option>
                <option value="সপুরা">সপুরা</option>
                <option value="বর্ণালী">বর্ণালী</option>
                <option value="উপশহর">উপশহর</option>
                <option value="বোয়ালিয়া">বোয়ালিয়া</option>
                <option value="শিরইল">শিরইল</option>
                <option value="সাগরপাড়া">সাগরপাড়া</option>
                <option value="রামপুর">রামপুর</option>
                <option value="রামচন্দ্রপুর">রামচন্দ্রপুর</option>
                <option value="সাধুর মোড়">সাধুর মোড়</option>
              </select>
            </div>
          )}

          {selectedThana === "শাহ-মখদুম" && (
            <div className="form-field">
              <label>Choose area:</label>
              <select name="area">
                <option value="">--এরিয়া সিলেক্ট করুন--</option>
                <option value="দরগাপাড়া">দরগাপাড়া</option>
                <option value="হেতেম খাঁ">হেতেম খাঁ</option>
                <option value="কাদিরগঞ্জ">কাদিরগঞ্জ</option>
                <option value="সাহেব বাজার">সাহেব বাজার</option>
                <option value="সুলতানাবাদ">সুলতানাবাদ</option>
                <option value="সপুরা">সপুরা</option>
                <option value="বর্ণালী">বর্ণালী</option>
              </select>
            </div>
          )}

          {selectedThana === "চন্দ্রিমা" && (
            <div className="form-field">
              <label>Choose area:</label>
              <select name="area">
                <option value="">--এরিয়া সিলেক্ট করুন--</option>
                <option value="শিরইল">শিরইল</option>
                <option value="ছোটবনগ্রাম">ছোটবনগ্রাম</option>
                <option value="শালবাগান">শালবাগান</option>
                <option value="নামো-ভদ্রা">নামো-ভদ্রা</option>
                <option value="পদ্মা আবাসিক">পদ্মা আবাসিক</option>
                <option value="সপুরা">সপুরা</option>
                <option value="চন্দ্রিমা আবাসিক">চন্দ্রিমা আবাসিক</option>
                <option value="মেহেরচন্ডী">মেহেরচন্ডী</option>
              </select>
            </div>
          )}

          <div className="form-field">
            <label>যেদিন সেবা নিতে চান*</label>
            <input type="date" name="date" required />
          </div>

          <div className="form-field ">
            <label>বিস্তারিত*</label>
            <textarea
              name="details"
              required
              className="main-form-comment"
            ></textarea>
          </div>

          <div className="form-field">
            <button type="submit">জমা দিন</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mainform;
