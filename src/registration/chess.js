import React from 'react'

export const chess = () => {
    return (
        <div className="text-left">
			<h3 className="text-xl font-extrabold">Pertandingan Catur</h3>
			<ol className="list-decimal p-8">
				<li>Format transfer 	: Nama - Catur - vSF21</li>
				<li><a href="gg.gg/daftarcaturvsf21" className="text-indigo-700">Link pendaftaran</a></li>
			</ol>
            <a href="" className="mt-6 text-blue-700">Peraturan lengkap</a>
		</div>
    )
}

export default chess
