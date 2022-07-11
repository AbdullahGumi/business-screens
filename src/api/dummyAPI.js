export async function getFavBusinesses() {
  return [
    {
      id: 1,
      title: "London stock",
      address: "Career start, 17-06-2018",
      image: "https://loremflickr.com/640/360",
      phone: "223215564789",
    },
    {
      id: 2,
      title: "London stock",
      address: "Career start, 17-06-2019",
      image: "https://loremflickr.com/640/260",
      phone: "443215564789",
    },
    {
      id: 3,
      title: "London stock",
      address: "Career start, 17-06-2022",
      image: "https://loremflickr.com/200/360",
      phone: "333215564789",
    },
    {
      id: 4,
      title: "London stock",
      address: "Career start, 17-06-2008",
      image: "https://loremflickr.com/140/360",
      phone: "113215564789",
    },
  ];
}

export async function getBankDetails() {
  return {
    bankAccountDetails: {
      id: 1,
      title: "ABCD EF GH O GLFJKKKFFKJF",
      accNo: "0J2323233532125",
      bankName: "Meezan Bank",
      branchCode: "0257 DHA Phase 5",
      iban: "5555555555555555",
    },
    jazzCash: {
      id: 1,
      title: "meezan",
      accNo: "212145444555",
    },
    regionalRep: {
      id: 1,
      title: "MEEZSAN BAF",
      phone: "232323232323",
    },
  };
}
