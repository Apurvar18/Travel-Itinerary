import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedDestinations = async () => {
  await prisma.destination.createMany({
    data: [
      { name: "Banff National Park", description: "A UNESCO World Heritage site known for its stunning mountains, lakes, and wildlife.", country: "Canada" },
      { name: "Vancouver", description: "A bustling west coast seaport known for its high quality of life, beautiful parks, and scenic views.", country: "Canada" },
      { name: "Toronto", description: "Canada's largest city known for its skyscrapers, cultural diversity, and iconic CN Tower.", country: "Canada" },
      { name: "Montreal", description: "A cultural hub with a European flair, famous for its festivals and French heritage.", country: "Canada" },
      { name: "Quebec City", description: "A city rich in history with cobblestone streets, centuries-old architecture, and French influences.", country: "Canada" },
      { name: "Ottawa", description: "The capital of Canada, known for its historic landmarks like Parliament Hill.", country: "Canada" },
      { name: "Edmonton", description: "The capital city of Alberta, known for its large West Edmonton Mall and cultural festivals.", country: "Canada" },
      { name: "Calgary", description: "A city known for its oil industry and the Calgary Stampede festival.", country: "Canada" },
      { name: "Victoria", description: "The capital of British Columbia, known for its beautiful harbor and historic buildings.", country: "Canada" },
      { name: "Halifax", description: "A port city in Nova Scotia, known for its maritime heritage.", country: "Canada" },
      { name: "Winnipeg", description: "The capital of Manitoba, known for its diverse culture and the Royal Canadian Mint.", country: "Canada" },
      { name: "Regina", description: "The capital city of Saskatchewan, known for its beautiful parks and the Royal Saskatchewan Museum.", country: "Canada" },
      { name: "Saskatoon", description: "A city in Saskatchewan known for its picturesque bridges and arts scene.", country: "Canada" },
      { name: "Charlottetown", description: "The capital city of Prince Edward Island, known for its historic significance in Canadian Confederation.", country: "Canada" },
      { name: "Fredericton", description: "The capital of New Brunswick, known for its riverside trails and historic landmarks.", country: "Canada" },
      { name: "Saint John", description: "A port city in New Brunswick, known for its scenic waterfront and historical sites.", country: "Canada" },
      { name: "St. John's", description: "The capital of Newfoundland and Labrador, known for its colorful houses and rich maritime history.", country: "Canada" },
      { name: "Gatineau", description: "Located across the river from Ottawa, known for its beautiful parks and government buildings.", country: "Canada" },
      { name: "Burlington", description: "Located in Ontario, known for its beautiful waterfront and gardens.", country: "Canada" },
      { name: "Kitchener", description: "A city in Ontario, known for its tech industry and Oktoberfest celebrations.", country: "Canada" },
      { name: "Hamilton", description: "A city in Ontario known for its steel industry and vibrant arts community.", country: "Canada" },
      { name: "Mississauga", description: "Located in Ontario, known for its shopping malls and proximity to Toronto.", country: "Canada" },
      { name: "Brampton", description: "A diverse city in Ontario known for its cultural festivals and parks.", country: "Canada" },
      { name: "Surrey", description: "Located in British Columbia, known for its natural beauty and outdoor activities.", country: "Canada" },
      { name: "Richmond", description: "A city in British Columbia, famous for its Asian cuisine and proximity to Vancouver.", country: "Canada" },
      { name: "Burnaby", description: "Located in British Columbia, known for its parks and outdoor activities.", country: "Canada" },
      { name: "Nanaimo", description: "A city in British Columbia, known for its beautiful harbor and outdoor lifestyle.", country: "Canada" },
      { name: "Whistler", description: "A resort town in British Columbia, known for its skiing and outdoor adventures.", country: "Canada" },
      { name: "Kelowna", description: "A city in British Columbia, famous for its wineries and stunning lakeside views.", country: "Canada" },
      { name: "Thunder Bay", description: "Located in Ontario, known for its outdoor activities and the Sleeping Giant Provincial Park.", country: "Canada" },
      { name: "Lethbridge", description: "A city in Alberta, known for its agricultural industries and nearby parks.", country: "Canada" },
      { name: "Kamloops", description: "Located in British Columbia, known for its outdoor recreation and proximity to the Thompson River.", country: "Canada" },
      { name: "Grande Prairie", description: "A city in Alberta, known for its oil and gas industry and vibrant arts scene.", country: "Canada" },
      { name: "Barrie", description: "A city in Ontario, known for its waterfront and outdoor activities.", country: "Canada" },
      { name: "Wood Buffalo", description: "Located in Alberta, known for its natural parks and wildlife.", country: "Canada" },
      { name: "Airdrie", description: "Located in Alberta, known for its growing population and proximity to Calgary.", country: "Canada" },
      { name: "Chilliwack", description: "A city in British Columbia, known for its agriculture and outdoor activities.", country: "Canada" },
      { name: "Cornwall", description: "A city in Ontario, known for its historic sites and waterfront activities.", country: "Canada" },
      { name: "North Bay", description: "A city in Ontario, known for its natural beauty and outdoor adventures.", country: "Canada" },
      { name: "Red Deer", description: "Located in Alberta, known for its central location and as a hub for outdoor activities.", country: "Canada" },
      { name: "Mont-Tremblant", description: "A ski resort town in Quebec, known for its stunning mountain scenery and winter sports.", country: "Canada" },
      { name: "Whalley", description: "Part of Surrey in British Columbia, known for its emerging community and cultural diversity.", country: "Canada" },
      { name: "Oakville", description: "A city in Ontario, known for its beautiful lakeshore, historic downtown, and affluent neighborhoods.", country: "Canada" },
      { name: "Stratford", description: "A city in Ontario, famous for its annual Shakespeare Festival and picturesque surroundings.", country: "Canada" },
      { name: "Guelph", description: "A city in Ontario, known for its vibrant arts scene, natural parks, and historic architecture.", country: "Canada" },
      { name: "Peterborough", description: "Located in Ontario, known for its Trent-Severn Waterway and historical significance.", country: "Canada" },
      { name: "Sarnia", description: "A city in Ontario, known for its waterfront and industrial industries.", country: "Canada" },
      { name: "Chatham-Kent", description: "A regional municipality in Ontario, known for its agricultural lands and historic sites.", country: "Canada" },
      { name: "Windsor", description: "A city in Ontario, known for its automotive industry and proximity to Detroit.", country: "Canada" },
      { name: "Lindsay", description: "A town in Ontario, known for its historical landmarks and lakeside activities.", country: "Canada" },
      { name: "Fort McMurray", description: "A city in Alberta, known for its oil sands industry and outdoor lifestyle.", country: "Canada" },
      { name: "Fort Erie", description: "A town in Ontario, known for its historic border crossing and proximity to Niagara Falls.", country: "Canada" },
      { name: "Terrace", description: "A city in British Columbia, known for its natural beauty and proximity to the Skeena River.", country: "Canada" },
      { name: "Sooke", description: "A town in British Columbia, famous for its natural parks and outdoor recreation.", country: "Canada" },
      { name: "Cranbrook", description: "A city in British Columbia, known for its scenic views and proximity to Kootenay National Park.", country: "Canada" },
      { name: "Powell River", description: "A town in British Columbia, famous for its beautiful coastal scenery and outdoor activities.", country: "Canada" },
      { name: "Fort St. John", description: "A city in British Columbia, known for its oil and gas industry and northern lifestyle.", country: "Canada" },
      { name: "Melfort", description: "A town in Saskatchewan, known for its agricultural industry and historic sites.", country: "Canada" },
      { name: "Brockville", description: "A town in Ontario, famous for its historic downtown and waterfront activities.", country: "Canada" },
      { name: "Slave Lake", description: "A town in Alberta, known for its natural beauty and outdoor recreational opportunities.", country: "Canada" },
      { name: "Estevan", description: "A city in Saskatchewan, known for its oil and gas industry and agricultural heritage.", country: "Canada" },
    ],
  });

  console.log("Seed data added!");
};

seedDestinations()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
