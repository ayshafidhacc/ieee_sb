import React from 'react';

export default function ExecutiveCommittee() {
  const members = [
    {
      name: "Navaneeth Narayanan",
      position: "Chairperson",
      photo: "/Copy of naveehh - Navaneeth Narayanan.jpg"
    },
    {
      name: "SOURAV KK",
      position: "Vice chairperson",
      photo: "/Copy of 16c52853-890e-4330-a1b6-a6d9bca9d62c - ꜱᴏᴜʀᴀᴠ_ꜱ_ ɴᴀᴍʙɪᴀʀ.jpeg"
    },
    {
      name: "Sadarsh Santhosh Babu",
      position: "Secretary",
      photo: "/Copy of IMG-20241225-WA0041 - Sadarsh SanthoshBabu.jpg"
    },
    {
      name: "Harshikhareendran",
      position: "Treasurer",
      photo: "/Copy of IMG-20241030-WA0006 - Harshik Hareendran.jpg"
    },
    {
      name: "Abijith ks",
      position: "Technical Coordinator",
      photo: "/Copy of 1000022799 - Abijith Ks.jpg"
    },
    {
      name: "Anandhu kk",
      position: "Media Lead",
      photo: "/Copy of IMG-20241109-WA0070 - Anandhu Kk.jpg"
    },
    {
      name: "Sminudeeth.k",
      position: "MDC",
      photo: "/Copy of umbutten - Sminudeeth. K.jpg"
    },
    {
      name: "Adithiyan om",
      position: "ECC",
      photo: "/Copy of IMG_20241103_230543 - Adi thyan.jpg"
    },
    {
      name: "AMAN BHARATH",
      position: "Link Rep",
      photo: "/Copy of AMANBHARATH - Aman Bharath.jpg"
    },
    {
      name: "Dr. Amitha I C",
      position: "Counsellor",
      photo: "/Copy of IMG_20231101_151243 - AMITHA I C.jpg"
    },
  ];

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Executive Committee</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {members.map((member, idx) => (
          <div key={idx} className="glass-card text-center p-6 flex flex-col items-center">
            <img
              src={'/ieee_sb' + member.photo}
              alt={member.name}
              className="rounded-full mb-4 w-28 h-28 object-cover border-2 border-blue-300"
            />
            <h2 className="text-xl font-semibold text-blue-700 mb-1">{member.name}</h2>
            <p className="text-blue-900 font-medium mb-2">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
