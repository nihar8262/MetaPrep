import React, { useState } from 'react';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCEqWO82gHrocCavTLbzFuW4BQenDEAdd8";

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const result = await chat.sendMessage(prompt);
  return result.response.text();
}

const CSSubjects = () => {
  const [input, setInput] = useState('');

  const subjects = [
    'Data Structures',
    'Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Databases',
    'Software Engineering',
    'Artificial Intelligence',
    'Machine Learning',
    'Cyber Security',
    'Computer Architecture',
    'Sex Education'
  ];

  const handleClick = async (subject) => {
    const result = await runChat(`I am preparing for an online assesment of tech companies which ask mcq question on cs fundamentals, in their online assesment round. Give me 20 mcq questions, 4 options only 1 correct, on ${subject} with answer and explation of each the format should be firt question then its correct option then explanation and then the next question.Generate the output  like this -->**Question 1:** Which layer in the TCP/IP model is responsible for routing data packets? (A) Application Layer (B) Network Layer (C) Transport Layer (D) Physical Layer **Answer: B** **Explanation:** The Network Layer is responsible for routing packets based on the destination IP addresses. **Question 2:** Which of the following is a type of network topology? (A) Bus (B) Ring (C) Star (D) All of the above **Answer: D** **Explanation:** Bus, ring, and star are all common network topologies that describe the way devices are connected to each other. format `);
    setInput(result);
  };
 
  console.log(input);
//   parsing



    //  const input = `**Question 1:** Which layer in the TCP/IP model is responsible for routing data packets? (A) Application Layer (B) Network Layer (C) Transport Layer (D) Physical Layer **Answer: B** **Explanation:** The Network Layer is responsible for routing packets based on the destination IP addresses. **Question 2:** Which of the following is a type of network topology? (A) Bus (B) Ring (C) Star (D) All of the above **Answer: D** **Explanation:** Bus, ring, and star are all common network topologies that describe the way devices are connected to each other. **Question 3:** What is the purpose of a MAC address? (A) To identify a specific network interface (B) To route packets between networks (C) To provide a secure connection over the network (D) To assign IP addresses to devices **Answer: A** **Explanation:** A MAC address is a unique identifier assigned to each network interface, used for identifying devices on a network. **Question 4:** Which of the following is a layer 4 protocol? (A) HTTP (B) IP (C) TCP (D) UDP **Answer: C & D** **Explanation:** TCP and UDP are both layer 4 protocols, responsible for providing communication between applications and transporting data reliably. **Question 5:** What is the difference between a router and a switch? (A) Routers connect different networks, while switches connect devices within a network. (B) Switches connect different networks, while routers connect devices within a network. (C) Routers forward packets based on IP addresses, while switches forward packets based on MAC addresses. (D) Switches forward packets based on IP addresses, while routers forward packets based on MAC addresses. **Answer: A & C** **Explanation:** Routers operate at the Network Layer and forward packets based on IP addresses, while switches operate at the Data Link Layer and forward packets based on MAC addresses. **Question 6:** Which of the following is a type of cloud computing service model? (A) IaaS (B) SaaS (C) PaaS (D) All of the above **Answer: D** **Explanation:** IaaS (Infrastructure as a Service), SaaS (Software as a Service), and PaaS (Platform as a Service) are all cloud computing service models where resources are provided to customers over the internet. **Question 7:** What is the primary purpose of a firewall? (A) To prevent unauthorized access to a network (B) To improve network performance (C) To provide routing functionality (D) To store network data **Answer: A** **Explanation:** A firewall is a security device designed to protect a network from unauthorized access and malicious attacks. **Question 8:** Which of the following is a type of wireless network security protocol? (A) WEP (B) WPA (C) WPA2 (D) All of the above **Answer: D** **Explanation:** WEP (Wired Equivalent Privacy), WPA (Wi-Fi Protected Access), and WPA2 are all wireless network security protocols designed to prevent unauthorized access and protect data. **Question 9:** What is the purpose of a VPN? (A) To create a private network connection over a public network (B) To enhance network performance (C) To provide routing functionality (D) To store network data **Answer: A** **Explanation:** A VPN (Virtual Private Network) allows users to securely access a private network remotely over a public network. **Question 10:** Which of the following is an advantage of network virtualization? (A) Improved flexibility (B) Cost savings (C) Increased security (D) All of the above **Answer: D** **Explanation:** Network virtualization allows for the creation of multiple virtual networks over a single physical network, providing improved flexibility, cost savings, and enhanced security;`;

  const questions = input.split('**Question').map((item, index) => {
    if (index !== 0) {
      return '**Question' + item.trim();
    } else {
      return item.trim();
    }
  }).filter(item => item).map(question => {
    const questionParts = question.split('**Answer:');
    const questionText = questionParts[0].replace(/\*\*Question\d+:\*\*/, '').trim();
    const answerParts = questionParts[1].split('**Explanation:**');
    const answerText = answerParts[0].trim();
    const explanationText = answerParts[1].trim();
    const correctAnswers = answerText.split('&').map(answer => answer.trim().replace(/[()]/g, '').replace('**', ''));

    const options = questionText.match(/\(.*?\)/g).map((option, index) => ({
      label: option.replace(/[()]/g, ''),
      text: questionText.split(option)[1].split(/[()]/)[0].trim()
    }));

    return {
      questionText,
      correctAnswers,
      explanationText,
      options
    };
  });

  console.log(questions)

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});
  const [canSubmit, setCanSubmit] = useState({});
  

  const handleOptionChange = (questionIndex, optionLabel) => {
    const selectedOption = selectedAnswers[questionIndex] || [];
    const optionIndex = selectedOption.indexOf(optionLabel);

    if (optionIndex === -1) {
      selectedOption.push(optionLabel);
    } else {
      selectedOption.splice(optionIndex, 1);
    }

    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: selectedOption
    });

    setCanSubmit({
      ...canSubmit,
      [questionIndex]: selectedOption.length > 0
    });
  };

  const handleSubmit = (questionIndex) => {
    setShowExplanation({
      ...showExplanation,
      [questionIndex]: true
    });
    setCanSubmit({
      ...canSubmit,
      [questionIndex]: false
    });
  };

  const isCorrect = (questionIndex) => {
    const selectedOption = selectedAnswers[questionIndex] || [];
    const correctAnswers = questions[questionIndex].correctAnswers;

    return selectedOption.length > 0 &&
           selectedOption.every(answer => correctAnswers.includes(answer)) &&
           correctAnswers.every(answer => selectedOption.includes(answer));
  };

//console.log(response)
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Computer Science Core Subjects</h1>
      <ul className="list-disc list-inside mb-8">
        {subjects.map((subject) => (
          <li
            key={subject}
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => handleClick(subject)}
          >
            {subject}
          </li>
        ))}
      </ul>



      {input && (
    <div className="p-4 mx-auto max-w-[1300px]">
      {questions.map((question, index) => (
        <div key={index} className="mb-6 p-4 border rounded shadow-sm">
          <h3 className="font-bold">{`${index + 1}. `}{question.questionText.split('?')[0]}</h3>
          
          <div className="flex mt-4 flex-col space-y-2">
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedAnswers[index]?.includes(option.label) || false}
                  onChange={() => handleOptionChange(index, option.label)}
                  disabled={!!showExplanation[index]}
                />
                <span>{`(${option.label}). ${option.text}`}</span>
              </label>
            ))}
          </div>
          {canSubmit[index] && !showExplanation[index] && (
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => handleSubmit(index)}
            >
              Submit
            </button>
          )}
          {showExplanation[index] && (
            <div className={`mt-4 p-2 rounded ${isCorrect(index) ? 'bg-green-200' : 'bg-red-200'}`}>
              <p><strong>{isCorrect(index) ? 'Correct!' : 'Incorrect!'}</strong></p>
              <p><strong>Correct Answers: {questions[index].correctAnswers.map(answer => `(${answer})`).join(' ')}</strong></p>
              <p><strong>Explanation:</strong> {question.explanationText}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )}
    </div>
  );
};

export default CSSubjects;
