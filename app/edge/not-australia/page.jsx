import EdgeFunctionExplainer from '../explainer';

export const metadata = {
    title: 'Not Australia'
};

export default function Page() {
    return (
        <>
            <h1 className="mb-8">You&apos;re not in Australia!</h1>
            <EdgeFunctionExplainer />
        </>
    );
}
