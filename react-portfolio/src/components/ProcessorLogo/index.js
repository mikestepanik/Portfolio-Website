import React from 'react';
import './index.scss';

const ProcessorLogo = () => {
    return (
        <div className="processor-logo">
            <svg
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="processor-svg"
            >
                {/* Motherboard background */}
                <rect
                    x="50"
                    y="50"
                    width="300"
                    height="300"
                    fill="#1a1a1a"
                    stroke="#0f0"
                    strokeWidth="2"
                    rx="10"
                />

                {/* PCB Traces */}
                <g className="pcb-traces">
                    {/* CPU to RAM traces */}
                    <path
                        d="M 150 150 L 90 90 L 60 90"
                        stroke="#0f0"
                        strokeWidth="1"
                        fill="none"
                        className="trace"
                    />
                    <path
                        d="M 250 150 L 310 90 L 340 90"
                        stroke="#0f0"
                        strokeWidth="1"
                        fill="none"
                        className="trace"
                    />
                    {/* CPU to PCIe traces */}
                    <path
                        d="M 150 250 L 90 310 L 60 310"
                        stroke="#0f0"
                        strokeWidth="1"
                        fill="none"
                        className="trace"
                    />
                    <path
                        d="M 250 250 L 310 310 L 340 310"
                        stroke="#0f0"
                        strokeWidth="1"
                        fill="none"
                        className="trace"
                    />
                    {/* Power traces */}
                    <path
                        d="M 300 150 L 340 150"
                        stroke="#0f0"
                        strokeWidth="1"
                        fill="none"
                        className="trace"
                    />
                    <path
                        d="M 300 250 L 340 250"
                        stroke="#0f0"
                        strokeWidth="1"
                        fill="none"
                        className="trace"
                    />
                </g>

                {/* Processor chip (smaller, more realistic size) */}
                <rect
                    x="150"
                    y="150"
                    width="100"
                    height="100"
                    fill="#2a2a2a"
                    stroke="#0f0"
                    strokeWidth="2"
                    rx="5"
                />

                {/* RAM Slots */}
                {[...Array(4)].map((_, i) => (
                    <g key={`ram-${i}`} className="ram-slot">
                        <rect
                            x="60"
                            y={80 + (i * 40)}
                            width="30"
                            height="25"
                            fill="#0f0"
                            className="ram-slot"
                        />
                        <rect
                            x="310"
                            y={80 + (i * 40)}
                            width="30"
                            height="25"
                            fill="#0f0"
                            className="ram-slot"
                        />
                    </g>
                ))}

                {/* PCIe Slots */}
                {[...Array(3)].map((_, i) => (
                    <g key={`pcie-${i}`} className="pcie-slot">
                        <rect
                            x={60 + (i * 80)}
                            y="320"
                            width="60"
                            height="20"
                            fill="#0f0"
                            className="pcie-slot"
                        />
                    </g>
                ))}

                {/* SATA Ports */}
                {[...Array(4)].map((_, i) => (
                    <g key={`sata-${i}`} className="sata-port">
                        <rect
                            x="60"
                            y={280 + (i * 10)}
                            width="15"
                            height="5"
                            fill="#0f0"
                            className="sata-port"
                        />
                    </g>
                ))}

                {/* Power Connector */}
                <rect
                    x="310"
                    y="280"
                    width="30"
                    height="15"
                    fill="#0f0"
                    className="power-connector"
                />

                {/* Processor pins */}
                {[...Array(4)].map((_, i) => (
                    <g key={`pin-${i}`}>
                        <rect
                            x={160 + (i * 25)}
                            y="140"
                            width="8"
                            height="20"
                            fill="#0f0"
                            className="pin"
                        />
                        <rect
                            x={160 + (i * 25)}
                            y="240"
                            width="8"
                            height="20"
                            fill="#0f0"
                            className="pin"
                        />
                    </g>
                ))}

                {/* Animated data packets on traces */}
                <g className="data-packets">
                    {[...Array(6)].map((_, i) => (
                        <g key={`packet-${i}`} className={`packet packet-${i}`}>
                            <circle
                                cx="0"
                                cy="0"
                                r="3"
                                fill="#0f0"
                                className="packet-dot"
                            />
                        </g>
                    ))}
                </g>

                {/* Processor details */}
                <text
                    x="200"
                    y="200"
                    textAnchor="middle"
                    fill="#0f0"
                    className="processor-text"
                >
                    CPU
                </text>

                {/* Component labels */}
                <text
                    x="75"
                    y="95"
                    textAnchor="middle"
                    fill="#0f0"
                    className="component-label"
                >
                    RAM
                </text>
                <text
                    x="90"
                    y="330"
                    textAnchor="middle"
                    fill="#0f0"
                    className="component-label"
                >
                    PCIe
                </text>
                <text
                    x="325"
                    y="290"
                    textAnchor="middle"
                    fill="#0f0"
                    className="component-label"
                >
                    PWR
                </text>
            </svg>
        </div>
    );
};

export default ProcessorLogo; 