import mongoose from 'mongoose'

const connectDB = async () => {
	try {
        mongoose.set('strictQuery', true);
		// Connect to Mongo
		const conn = await mongoose.connect("mongodb://127.0.0.1:27017/test", {
			// useUnifiedTopology: true,
			// useNewUrlParser: true,s
			// useCreateIndex: true,
		}) // New mongo url parser
		console.log("MongoDB Connected: ")
	} catch (error) {
		console.error(`Error: ${error.message}`)
		// exit with failure
		process.exit(1)
	}
}
connectDB();

export default connectDB