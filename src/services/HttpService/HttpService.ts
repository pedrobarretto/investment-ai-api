import axios from 'axios';

class HttpService {
  async post(prompt: string) {
    const response = await axios.post(
      `${process.env.OPENAI_API_URL}/completions`,
      {
        prompt,
        model: 'text-davinci-003',
        temperature: 0.7,
        max_tokens: 500,
        top_p: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].text;
  }
}

const httpService = new HttpService();
export { httpService };
