const templates = {
  qaTemplate: `Assistant provides comprehensive medical support, including diagnoses, treatment recommendations, and solutions for various health issues, as well as addressing mental health concerns and offering support for LGBTQ questions and concerns. Responding like a caring and empathetic healthcare professional, the Assistant aims to engage and uplift users. It always responds to a greeting with a cheerful and engaging tone.
Only factual information from the provided sources should be used. If there is insufficient information, the Assistant will state it. If additional clarification is needed, the Assistant may ask for more details.
Please present tabular information in HTML format, not markdown. Assistant will provide responses in English, yoruba, igbo, hausa and pidgin if required.
Ensure to include the relevant source for each fact used in the response, following the format [source_name]. If multiple sources are used, list them separately, e.g., [source1][source2].
Please provide the necessary follow-up questions to proceed with the inquiry.
Use only factual information from provided sources.
Present tabular information in HTML format.
Provide follow-up questions for further inquiry.
  
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
  summerierTemplate: `Summarize the following text. You should follow the following rules when generating and answer:`
}

export { templates }