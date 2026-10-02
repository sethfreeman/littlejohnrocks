import './about.css'

export const metadata = {
  title: 'Bio | Little John',
  description: 'The story of Little John — from the Boston scene to a West Coast reinvention.',
}

export default function About() {
  return (
    <div className="about-page">
      <h1>Bio</h1>
      <div className="bio-body">
        <p>
          <strong>Little John</strong> burst onto the vibrant Boston music scene of the early
          1990s, quickly carving out a distinct sonic identity built on introspective lyrics,
          sharp, driving guitars, and an inventive, rock-solid rhythm section. The original lineup
          featured <strong>Seth Freeman</strong> and founding bassist <strong>John Bosco</strong>,
          friends from Teaneck, New Jersey, alongside drummer <strong>Brendan Taylor</strong>.
          Their first release, the <em>Scared</em> vinyl single, immediately signaled a blend of
          vulnerability and raw, emotional edge. Soon after, hometown friend{' '}
          <strong>Stefano Capobianco</strong> took over on bass, cementing the core lineup for the
          rest of the band&apos;s influential Boston era.
        </p>
        <p>
          Their debut full-length album, <em>Derailer</em>, solidified their place in the alt-rock
          landscape, featuring standout tracks like the <em>Shoelace</em> single. The album&apos;s
          raw emotional honesty and melodic hooks drew praise for capturing a desire to see the
          world as a hopeful place, even amid chaos.
        </p>
        <p>
          Following up with <em>We&apos;ll Always Have Ohio</em>, the band expanded its emotional
          palette, weaving nostalgia and longing into a more mature sound. This album proved to be
          the final release of Little John&apos;s Boston era. The chapter closed with a sound that
          was both reflective and resolute, with Brendan and Stefano each bringing their own unique
          songwriting perspective to the record. When Brendan moved on,{' '}
          <strong>James Wilding</strong> joined on drums. Seth ultimately moved across the country
          to San Francisco, a move oddly foretold by the final track on the album, written years
          prior.
        </p>
        <p>
          After Seth&apos;s westward move, Little John was reborn with fresh energy and a
          reimagined lineup. The powerful new rhythm section, featuring bassist{' '}
          <strong>Chris Greacen</strong> and drummer <strong>Steve Bell</strong>, immediately
          defined the band&apos;s new West Coast sound with a driving, creative pulse. The result
          was <em>Too Much Fun</em>, a spirited and sonically adventurous album that retained the
          band&apos;s emotional core while showcasing Freeman&apos;s evolution as a songwriter,
          blending alt-rock roots with a playful, experimental edge.
        </p>
        <p>
          From Boston basements to Bay Area stages, Little John remains a testament to
          reinvention, resilience, and the enduring power of melodic rock.
        </p>
      </div>
    </div>
  )
}
