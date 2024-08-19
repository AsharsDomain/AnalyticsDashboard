// src/api.js

export const fetchMockData = (year) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock data to be returned
        const data2023 = {
          products: 300,
          categories: 12,
          customers: 33,
          alerts: 42,
          pieData: [
            { name: 'Twitter', value: 400 },
            { name: 'Instagram', value: 300 },
            { name: 'Facebook', value: 300 },
            { name: 'Whatsapp', value: 200 },
          ],
          lineData: [
            { name: 'January', Comments: 4000, Likes: 2400, amt: 2400 },
            { name: 'February', Comments: 3000, Likes: 1398, amt: 2210 },
            { name: 'March', Comments: 2000, Likes: 9800, amt: 2290 },
            { name: 'April', Comments: 2780, Likes: 3908, amt: 2000 },
            { name: 'May', Comments: 1890, Likes: 4800, amt: 2181 },
            { name: 'June', Comments: 2390, Likes: 3800, amt: 2500 },
            { name: 'July', Comments: 3490, Likes: 4300, amt: 2100 },
          ],
          barData: [
            { name: 'Jan', New_Users: 400 },
            { name: 'Feb', New_Users: 300 },
            { name: 'Mar', New_Users: 200 },
            { name: 'Apr', New_Users: 278 },
            { name: 'May', New_Users: 189 },
            { name: 'Jun', New_Users: 239 },
            { name: 'Jul', New_Users: 349 },
          ],
        };

        const data2024 = {
          products: 600,
          categories: 29,
          customers: 50,
          alerts: 100,
          pieData: [
            { name: 'Twitter', value: 800 },
            { name: 'Instagram', value: 700 },
            { name: 'Facebook', value: 1500 },
            { name: 'Whatsapp', value: 600 },
          ],
          lineData: [
            { name: 'January', Comments: 8000, Likes: 6400, amt: 2400 },
            { name: 'February', Comments: 5000, Likes: 3398, amt: 2210 },
            { name: 'March', Comments: 8000, Likes: 4800, amt: 2290 },
            { name: 'April', Comments: 9780, Likes: 7908, amt: 2000 },
            { name: 'May', Comments: 1890, Likes: 2800, amt: 2181 },
            { name: 'June', Comments: 5500, Likes: 7800, amt: 2500 },
            { name: 'July', Comments: 7000, Likes: 6300, amt: 2100 },
          ],
          barData: [
            { name: 'Jan', New_Users: 700 },
            { name: 'Feb', New_Users: 800 },
            { name: 'Mar', New_Users: 100 },
            { name: 'Apr', New_Users: 678 },
            { name: 'May', New_Users: 589 },
            { name: 'Jun', New_Users: 639 },
            { name: 'Jul', New_Users: 949 },
          ],
        };
        resolve(year === '2024' ? data2024 : data2023);
      }, 2000); // Simulate 2 seconds delay
    });
  };
  