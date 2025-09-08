type AboutDetailPageProps = {
    params: {
        id: string;
    };
};

const AboutDetailPage = async ({ params }: AboutDetailPageProps) => {
    const { id } = params;
    console.log("id : ",id);
    return (
        <div>AboutDetailPage {id}</div>
    )
}

export default AboutDetailPage