const departments = [
	{
	  department: "customer_service",
	  sub_departments: ["support", "customer_success"],
	},
	{
	  department: "design",
	  sub_departments: ["graphic_design", "product_design", "web_design"],
	},
  ];
  
  const jsonData = JSON.stringify(departments);
  console.log(jsonData);
  