import React from "react"
import { Button } from "react-bootstrap"

export default function DashboardHeader({ onClose, title }) {
    return (
        <div className="custom-modal-header">
            <nav className="modal-navigation">
                <div className="modal-title">{title}</div>
                <div className="modal-actions d-none d-lg-flex">
                    <Button
                        variant="none"
                        className="modal-close d-none d-lg-block"
                        onClick={onClose}
                    >
                        <svg
                            width="43"
                            height="43"
                            viewBox="0 0 43 43"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.68173 11.5314L11.5317 9.68139C11.6962 9.51694 11.857 9.51329 12.0141 9.67042L32.7559 30.4122C32.913 30.5694 32.9094 30.7301 32.7449 30.8946L30.8949 32.7446C30.7305 32.9091 30.5697 32.9127 30.4126 32.7556L9.67076 12.0138C9.51363 11.8566 9.51728 11.6959 9.68173 11.5314Z"
                                fill="#393D3F"
                            />
                            <path
                                d="M9.73397 30.4538L30.4538 9.7339C30.6183 9.56946 30.7791 9.56581 30.9362 9.72294L32.704 11.4907C32.8611 11.6478 32.8575 11.8086 32.693 11.9731L11.9731 32.6929C11.8087 32.8574 11.6479 32.861 11.4908 32.7039L9.72301 30.9361C9.56587 30.779 9.56953 30.6182 9.73397 30.4538Z"
                                fill="#393D3F"
                            />
                        </svg>
                    </Button>
                </div>
                <Button
                    variant="none"
                    className="modal-close-small d-block d-lg-none"
                    onClick={onClose}
                >
                    <svg
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.68173 11.5314L11.5317 9.68139C11.6962 9.51694 11.857 9.51329 12.0141 9.67042L32.7559 30.4122C32.913 30.5694 32.9094 30.7301 32.7449 30.8946L30.8949 32.7446C30.7305 32.9091 30.5697 32.9127 30.4126 32.7556L9.67076 12.0138C9.51363 11.8566 9.51728 11.6959 9.68173 11.5314Z"
                            fill="#393D3F"
                        />
                        <path
                            d="M9.73397 30.4538L30.4538 9.7339C30.6183 9.56946 30.7791 9.56581 30.9362 9.72294L32.704 11.4907C32.8611 11.6478 32.8575 11.8086 32.693 11.9731L11.9731 32.6929C11.8087 32.8574 11.6479 32.861 11.4908 32.7039L9.72301 30.9361C9.56587 30.779 9.56953 30.6182 9.73397 30.4538Z"
                            fill="#393D3F"
                        />
                    </svg>
                </Button>
            </nav>
        </div>
    )
}
