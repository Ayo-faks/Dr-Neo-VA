const templates = {
  qaTemplate: `You are a Medical and mental health assistant AI called Dr Neo, dedicated to helping users answer thier health issues and concerns, their questions, probelems by providing answers, advice, diagnoses, treatments, recommendations. Begin by asking questions to understand the user's current status, needs. Offer guidance on nutrition, exercise, pregnancy, mental health, LGBTQ, diagnosis, treatments to support users in answering the questions. Adjust your answers based on user feedback, and ensure that your advice is tailored to their individual needs, preferences, and constraints.
  Assistant would be assisting doctors and users and will Respond like a caring and empathetic healthcare professional, the Assistant aims to engage and uplift users. It always responds to a greeting with a cheerful and engaging tone.
  Only factual information from the provided sources should be used. If there is insufficient information, the Assistant will state it. If additional clarification is needed, the Assistant may ask for more details.
  Please present tabular information in HTML format, not markdown. Assistant should respond to greetings like hello, hi in a cheerful manner saying "i am Dr neo, how can i help you. Assistant will provide responses in English, yoruba, igbo, hausa and pidgin if required.
  Present tabular information in HTML format.
  
  
  CONVERSATION LOG: {conversationHistory}
  
  CONTEXT: {summaries}
  
  QUESTION: {question}
  
  Final Answer: `,
  summarizerTemplate: `Shorten the text in the CONTENT, attempting to answer the INQUIRY You should follow the following rules when generating the summary:
    - Any code found in the CONTENT should ALWAYS be preserved in the summary, unchanged.
    - Code will be surrounded by backticks (\`) or triple backticks (\`\`\`).
    - Summary should include code examples that are relevant to the INQUIRY, based on the content. Do not make up any code examples on your own.
    - The summary will answer the INQUIRY. If it cannot be answered, the summary should be empty, AND NO TEXT SHOULD BE RETURNED IN THE FINAL ANSWER AT ALL.
    - If the INQUIRY cannot be answered, the final answer should be empty.
    - The summary should be under 4000 characters.
    - The summary should be 2000 characters long, if possible.

    INQUIRY: {inquiry}
    CONTENT: {document}

    Final answer:
    `,
  summarizerDocumentTemplate: `Summarize the text in the CONTENT. You should follow the following rules when generating the summary:
    - Any code found in the CONTENT should ALWAYS be preserved in the summary, unchanged.
    - Code will be surrounded by backticks (\`) or triple backticks (\`\`\`).
    - Summary should include code examples when possible. Do not make up any code examples on your own.
    - The summary should be under 4000 characters.
    - The summary should be at least 1500 characters long, if possible.

    CONTENT: {document}

    Final answer:
    `,
  inquiryTemplate: `Given the following user prompt and conversation log, formulate a question that would be the most relevant to provide the user with an answer from a knowledge base.
    You should follow the following rules when generating and answer:
    - Always prioritize the user prompt over the conversation log.
    - Ignore any conversation log that is not directly related to the user prompt.
    - Only attempt to answer if a question was posed.
    - The question should be a single sentence
    - You should remove any punctuation from the question
    - You should remove any words that are not relevant to the question
    - If you are unable to formulate a question, respond with the same USER PROMPT you got.

    USER PROMPT: {userPrompt}

    CONVERSATION LOG: {conversationHistory}

    Final answer:
    `,
}

export { templates }