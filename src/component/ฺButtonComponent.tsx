"use client";

type ButtonComponentProps = {
    count: number;
    onClick: () => void;
};

export default function ButtonComponent({ count, onClick }: ButtonComponentProps) {
    return (
        <button type="button" onClick={onClick}>
            Like ({count})
        </button>
    );
}