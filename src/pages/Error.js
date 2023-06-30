import { Header } from '../components/common/Header';

export const Error = () => {

    return (
        <div className="home">
            <a className="skip-to-content" href="#main">Skip to content</a>
            <Header />
            <main id="main" class="grid-container grid-container--error">
                <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
                    The page you're looking for is not found!
                </h1>
            </main>
        </div>
    );
}