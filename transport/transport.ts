namespace $ {
	export class $terratensor_geomatrix_transport extends $mol_object2 {
		static api_base() {
			return 'http://localhost:8080/'
		}

		@$mol_mem
		static headers() {

			const headers = {
				'Content-Type': 'application/json',
			}

			// const token = this.token()
			// if( !token ) return headers

			return {
				...headers,
				// 'Authorization': `Token ${ token }`,
			}

		}

		@$mol_action
		static save(
			path: string,
			method: 'post' | 'put',
			body: object
		): any {

			const uri = this.api_base() + path

			const res = this.$.$mol_fetch.json( uri, {
				method,
				headers: this.headers(),
				body: JSON.stringify( body ),
			} )

			return res
		}
	}
}
