import {Hero} from "@widgets/Hero";
import {SectionTitle} from "@widgets/SectionTitle";
import {Container} from "@widgets/Container";

const HomePage = () => {
    return (
        <Container>
            <Hero />
            <SectionTitle
                preTitle="Стек"
                title="Чем был реализован проект?"
            >
                Кор стек фронтенда - NextJS, TailwindCSS, effector, FSD. Бекенд - go, gin, postgres. Деплой - Docker, Nginx, Linux.
            </SectionTitle>
            <SectionTitle
                preTitle="еще чучуть!"
                title="Еще немного воды, что бы лендинг не выглядел совсем уж пусто)"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam eius id, incidunt labore laborum magni minima molestias, nam numquam odio odit officia quam sint soluta tempore temporibus vel veritatis?
            </SectionTitle>


        </Container>
    )
}

export default HomePage