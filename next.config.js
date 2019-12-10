const withCSS = require("@zeit/next-css");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

// Here, we call dotenv.config(), and we destructure out the parsed object – usually set on process.env
//const { parsed: localEnv } = require("dotenv").config();
require("dotenv").config();

module.exports = withBundleAnalyzer(
  withCSS({
    webpack: (config, { webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config

      /*
				- We push the current ENV variables (see .env);
				- We pass the destructured dotenv.config() to webpack.EnvironmentPlugin – which will do the string replacement
				- The variables will be available in our code via the process.env i.e process.env.STAGING_URL
			*/
      config.plugins.push(new webpack.EnvironmentPlugin(process.env));

      /*
				- Next, we narrow down the required variables based on out current environment (PORDUCTION || DEVELOPMENT) using webpacks DefinePlugin
				- Now, based on the environment, we will output the choosen values (defined in our .env file) and set them to more generally named variables.
				- Now, we don't have to do a ENV conditional check everywhere we need the variable.
				- Instead we have the necessary value available to us via these new values such as SITE_URL resolved from the env values of STAGING_URL or PROD_URL
			*/

      let definePluginConfig = {
        PRODUCTION:
          process.env.NODE_ENV === "production"
            ? JSON.stringify(true)
            : JSON.stringify(false),
        ADDRESSIFY_API_KEY: JSON.stringify(process.env.ADDRESSIFY_API_KEY),
        SITE_URL:
          process.env.NODE_ENV === "production"
            ? JSON.stringify(process.env.PROD_URL)
            : JSON.stringify(process.env.STAGING_URL),
        LOGGING: process.env.NODE_ENV === "production" ? false : true,
        "typeof window": JSON.stringify("object"),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      };

      config.plugins.push(new webpack.DefinePlugin(definePluginConfig));

      // Important: return the modified config
      return config;
    }
  })
);
