import Link from "next/link";
import React from "react";
import Animation from "./Animation";

const Info = () => {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        안녕하세요 프론트엔드 개발자 김우희입니다.
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        기관과 웅대한 자신과 속에 것이다. 밝은 물방아 간에 안고, 따뜻한 무엇이 얼마나 우리 칼이다. 부패를 천고에 뭇 것은 인생을 천자만홍이 원대하고, 이상 뛰노는 것이다. 있을 그러므로
                        그림자는 싹이 이것이야말로 청춘의 능히 있으랴? 품었기 있는 무엇을 눈이 봄바람이다. 가치를 별과 군영과 얼음에 작고 지혜는 노래하며 것이다. 그림자는 꾸며 전인 밝은 길지 봄바람을
                        이것이다. 물방아 관현악이며, 넣는 가장 커다란 아름다우냐? 무엇이 과실이 밥을 꽃 인간은 거선의 아니다. 되는 생의 품에 청춘 청춘은 거친 위하여서.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/project">
                            <a className="btn-project">프로젝트 보러가기</a>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation />
                </div>
            </div>
        </section>
    );
};

export default Info;
