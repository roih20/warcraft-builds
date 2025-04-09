import {useEffect, useRef, useState} from "react";
import {getWoWAccessToken} from "../lib/oauth.js";
import {fetchData} from "../lib/utils.js";
import { useSearchParams } from "react-router-dom";


const RealmSelector = () => {

  const [realms, setRealms] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const [displayDropdown, setDisplayDropdown] = useState(false)
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchRealms = async () => {
      try {
        const accessToken = await getWoWAccessToken()

        const realms = await fetchData(
          "https://us.api.blizzard.com/data/wow/search/realm?namespace=dynamic-classic-us&timezone=America/New_York&orderby=id",
          accessToken
        )


        const mappedRealms = realms.results.map((realm) => {
          return {
            name: realm.data.name.en_US,
            slug: realm.data.slug,
          }
        })

        setRealms(mappedRealms)

      } catch (error) {
        console.error(`Error caught fetch realms (${error.message})`);
      }
    }

    fetchRealms()
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDisplayDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, []);

  const handleSelect = (realm) => {
    const newSearchParams = new URLSearchParams(searchParams)
    if (realm) {
      newSearchParams.set("realm", realm)
    } else {
      newSearchParams.delete("realm")
    }

    setSearchParams(newSearchParams)
    setDisplayDropdown(false)
  }

  const toggleDisplayDropdown = () => setDisplayDropdown((prev) => !prev)

  return (
      <div className="relative inline-block w-full sm:w-1/2">
        <button
          className="text-base text-left px-2 py-1 border border-slate-900 bg-slate-700 text-gray-200 rounded-md cursor-pointer w-full focus:bg-slate-800 focus:ouline-none focus:border-0"
          onClick={toggleDisplayDropdown}
        >
          {searchParams.get("realm") || "Select realm"}
        </button>
        <ul
          ref={dropdownRef}
          className={`realm-dropdown ${displayDropdown ? "block" : "hidden"} absolute bg-slate-800 z-10 border border-slate-800 rounded-sm mt-1 px-2 py-2.5 overflow-y-auto h-44 w-full`}
        >
          {
            realms.map((realm) => (
              <li
                key={realm.slug}
                className="hover:bg-slate-900 hover:rounded-md p-2 cursor-pointer text-gray-200"
                onClick={() => handleSelect(realm.name)}
              >
                {realm.name}
              </li>
            ))
          }
        </ul>
      </div>
  )
}

export default RealmSelector