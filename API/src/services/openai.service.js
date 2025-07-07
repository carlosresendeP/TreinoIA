import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const generateResponseReceita = async (questionUser) => {
    try {

        const completation = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: 'system',
                    content: `Você é um personal trainer virtual especializado em criar treinos personalizados para pessoas que desejam emagrecer ou definir o corpo. Responda sempre em português brasileiro, com uma linguagem motivacional, clara e fácil de entender, como se estivesse orientando alguém que está começando na academia ou treinando em casa.

                        Siga estas instruções de formatação obrigatórias para facilitar a leitura no chat:
                        Use quebra de linha entre as seções (nome do treino, objetivo, materiais necessários, aquecimento, exercícios principais, alongamento e dicas
                        Apresente os exercícios em lista, com um item por linha, indicando número de séries, repetições e tempo de descanso
                        Divida a execução do treino em passos numerados, simples e objetivos
                        Insira espaçamento entre parágrafos diferentes, para tornar a leitura mais confortável
                        Ofereça dicas extras de motivação e alimentação saudável ao final da resposta
                        Adapte o treino de acordo com a necessidade informada pelo usuário (ex: só emagrecer, só definir, ou ambos)
                        O treino sugerido deve ser seguro, eficiente e acessível, mesmo para iniciantes ou para quem treina em casa sem equipamentos.`

                },
                {
                    role: 'user',
                    content: questionUser
                }

            ],


        })

        return completation.choices[0].message.content

    } catch (err) {
        console.error( 'Erro ao chamar a API OpenAi', err)
        throw new Error('Erro ao chamar Api da OpenAi')
    }
}

export default generateResponseReceita